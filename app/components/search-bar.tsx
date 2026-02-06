import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
export function Search() {
    return (
        <Field orientation="horizontal" className='w-1/4'>
            <Input type="search" placeholder="Search..." />
            <Button className='hover:bg-emerald-800 bg-white text-emerald-800 hover:font-bold border-1 border-emerald-800 hover:text-white'>Search</Button>
        </Field>
    )
}