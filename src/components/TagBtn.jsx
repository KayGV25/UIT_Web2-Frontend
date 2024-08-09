export default function TagBtn({tag}){
    return(
        <div className="w-fit rounded-lg border-2 h-8 px-3 grid place-items-center border-current cursor-pointer">
            <p className="first-letter:capitalize">{tag}</p>
        </div>
    )
}