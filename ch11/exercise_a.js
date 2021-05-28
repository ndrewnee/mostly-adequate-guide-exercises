// Write a natural transformation that converts `Either b a` to `Maybe a`

// eitherToMaybe :: Either b a -> Maybe a
const eitherToMaybe = (e) => (e.isLeft ? nothing : Maybe.of(e.$value))
