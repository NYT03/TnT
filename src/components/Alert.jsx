function Book()
{
    function sayHello()
    {
        alert("Hello");
    }
    return(<>
    <button onClick={sayHello}> Say Hello</button>
    </>)
}
export default Book