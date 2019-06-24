const Forms = () => (
    <div>
        <form>
            <input type="text" name="city" /><br/>
            <input type="text" name="country" /><br/><br/>
            <button type="submit" className="btn">Check Weather</button>
        </form>
        <style JSX>{`
        input {
            background: none;
            border: none;
            border-bottom: 1px lightcoral solid;
            width: 200px;
            height: 25px;
        }
        .btn {
             background: #ddd;
             border: none;
             padding: 10px;
             color: #000;
             border-radius: 5px;
            clear: both;
        }
        `}
        </style>
    </div>
)

export default Forms