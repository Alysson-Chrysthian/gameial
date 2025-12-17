export default function TextInput(props) {
    return (
        <div
            className="flex flex-col gap-1"
        >
            <label htmlFor={props.id}>{props.label}</label>
            <input 
                className="
                    p-1 border-1 border-secundary rounded-sm outline-none
                    placeholder:text-transparent-black
                "
                type="text" 
                id={props.id}
                placeholder={props.placeholder}
                onChange={props.onChange}
                value={props.value}
            />
        </div>
    )
}