/**
 * 
 * @param {String} placeholder 
 * @param {String} value
 * @param {s: String=>void } onChange
 */

export function Input ({placeholder, value, onChange}){
    return <div>
        <input type="text" className="form-control" placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} />

    </div>
}