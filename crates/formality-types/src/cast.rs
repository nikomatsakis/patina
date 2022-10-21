use std::sync::Arc;

pub trait To {
    fn to<T>(&self) -> T
    where
        Self: Upcast<T>;
}

impl<A> To for A {
    fn to<T>(&self) -> T
    where
        Self: Upcast<T>,
    {
        <&A as Upcast<T>>::upcast(self)
    }
}

/// Our version of `Into`. This is the trait you use in where clauses,
/// but you typically implement `UpcastFrom`.
pub trait Upcast<T>: Clone {
    fn upcast(self) -> T;
}

impl<T, U> Upcast<U> for T
where
    T: Clone,
    U: UpcastFrom<T>,
{
    fn upcast(self) -> U {
        U::upcast_from(self)
    }
}

/// Our version of `From`. One twist: it is implemented for &T for all T.
/// This is the trait you implement.
pub trait UpcastFrom<T: Clone> {
    fn upcast_from(term: T) -> Self;
}

/// A "downcast" casts from a more general type
/// (e.g., any Parameter) to a more specific type
/// (e.g., a type). This returns an Option because
/// the value may not be an instance of the more
/// specific type.
pub trait Downcast<T>: Sized {
    fn downcast(t: &T) -> Option<Self>;
}

impl<A, B> Downcast<Vec<A>> for Vec<B>
where
    B: Downcast<A>,
{
    fn downcast(t: &Vec<A>) -> Option<Self> {
        t.iter().map(|a| B::downcast(a)).collect()
    }
}

impl<T: Clone, U> UpcastFrom<&T> for U
where
    T: Upcast<U>,
{
    fn upcast_from(term: &T) -> Self {
        T::upcast(T::clone(term))
    }
}

impl<T: Clone, U> UpcastFrom<Vec<T>> for Vec<U>
where
    T: Upcast<U>,
{
    fn upcast_from(term: Vec<T>) -> Self {
        term.into_iter().map(|t| T::upcast(t)).collect()
    }
}

impl<T: Clone, U> UpcastFrom<&[T]> for Vec<U>
where
    T: Upcast<U>,
{
    fn upcast_from(term: &[T]) -> Self {
        term.into_iter().map(|t| t.upcast()).collect()
    }
}

impl<T: Clone, U> UpcastFrom<Option<T>> for Option<U>
where
    T: Upcast<U>,
{
    fn upcast_from(term: Option<T>) -> Self {
        term.map(|t| t.upcast())
    }
}

impl<T: Clone, U> UpcastFrom<Arc<T>> for Arc<U>
where
    T: Upcast<U>,
{
    fn upcast_from(term: Arc<T>) -> Self {
        let term: &T = &term;
        Arc::new(term.to())
    }
}

#[macro_export]
macro_rules! self_from_term_impl {
    ($t:ty) => {
        impl $crate::cast::UpcastFrom<$t> for $t {
            fn upcast_from(v: $t) -> $t {
                v
            }
        }

        impl $crate::cast::Downcast<$t> for $t {
            fn downcast(v: &$t) -> $t {
                v.clone()
            }
        }
    };
}

#[macro_export]
macro_rules! from_term_impl {
    (impl UpcastFrom<$t:ident> for $e:ident) => {
        impl $crate::derive_links::UpcastFrom<$t> for $e {
            fn upcast_from(v: $t) -> $e {
                $e::$t(v)
            }
        }
    };

    (impl UpcastFrom<$t:ident> for $e:ident $(via $via:ident)+) => {
        impl $crate::derive_links::UpcastFrom<$t> for $e {
            fn upcast_from(v: $t) -> $e {
                $(
                    let v: $via = $crate::derive_links::UpcastFrom::upcast_from(v);
                )+
                <$e as $crate::derive_links::UpcastFrom<_>>::upcast_from(v)
            }
        }
    };
}

impl<A, B, A1, B1> UpcastFrom<(A1, B1)> for (A, B)
where
    A1: Upcast<A>,
    B1: Upcast<B>,
{
    fn upcast_from(term: (A1, B1)) -> Self {
        let (a1, b1) = term;
        (a1.upcast(), b1.upcast())
    }
}

impl<A, B, C, A1, B1, C1> UpcastFrom<(A1, B1, C1)> for (A, B, C)
where
    A1: Upcast<A>,
    B1: Upcast<B>,
    C1: Upcast<C>,
{
    fn upcast_from(term: (A1, B1, C1)) -> Self {
        let (a1, b1, c1) = term;
        (a1.upcast(), b1.upcast(), c1.upcast())
    }
}