import { ReadonlyURLSearchParams } from "next/navigation"

export function updateSearchParams(
    searchParams: ReadonlyURLSearchParams,
    key: string,
    value: string
) {
    const params = new URLSearchParams(searchParams.toString())

    if (params.get(key) === value) {
        params.delete(key)
    } else {
        params.set(key, value)
    }

    return params.toString()
}