import { CgSpinner } from "react-icons/cg"

export default function SecundaryButton(props) {
    return (
        <div>
            <button 
                className="
                    flex items-center justify-center gap-1 p-1 bg-secundary text-white rounded-md w-full cursor-pointer
                    hover:brightness-75
                "
                type={props.type}
            >
                {props.children}
                { props.isLoading &&
                    <CgSpinner className="animate-spin"/>
                }
            </button>
        </div>
    )
}