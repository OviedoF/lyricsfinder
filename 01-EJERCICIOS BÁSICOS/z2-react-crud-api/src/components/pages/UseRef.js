import {useRef, useState, useEffect} from 'react';

const UseRef = () => {
    const titulito = useRef();
    const inputText = useRef();
    const inputPassword = useRef();

    useEffect(() => {
        window.addEventListener('scroll', () => {
            titulito.current.style.fontSize = '70px'
        })
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputText.current.value);
        console.log(inputPassword.current.value);
    }

    return (
        <div>
            <h1 ref={titulito}>HOLAAAAAAAAAAAAAAAAA</h1>

            <form action="" onSubmit={(e) => handleSubmit(e)}>
                <input type="text" name="nombre" id="" ref={inputText}/>
                <input type="password" name="contraseña" id="" ref={inputPassword}/>
                <input type="submit" value="" />
            </form>

            <input type="color" name="" id="" onChange={(e) => titulito.current.style.color = e.target.value} />
        </div>
    );
}

export default UseRef;
