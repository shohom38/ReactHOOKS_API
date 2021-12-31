import React, { useState, useRef } from 'react';

function InputExam() {
    const [inputs, setInputs] = useState({
        name: '',
        age: '',
        mbti: '',
    });
    const nameInput = useRef();
    const { name, age, mbti } = inputs;
    const onChange = e => {
        console.log(e.target, "==== e.target");
        const { value, name } = e.target;

        setInputs({
            ...inputs, 
            [name]: value,
        });
    };

    const onReset = () => {
        setInputs({
            name: '',
            age: '',
            mbti: '',

        });
        nameInput.current.focus();
    };
    return (
        <div>
            <input name="name" placeholder="name" onChange={onChange} value={name} ref={nameInput} />
            {/* useRef를 사용하여 포커스를 가져온다  useRef는 DOM 선택시 사용가능하고 리렌더링하지 않으면서 변수값을 바꿔줄 수 있다, 혹은 setInterval 등을 초기화 할 수 있다.*/}
            <input name="age" placeholder="age" onChange={onChange} value={age} />
            <input name="mbti" placeholder="mbti" onChange={onChange} value={mbti} />
            <button onClick={onReset}>초기화</button>
            <div>
                <strong>값: </strong> {name} ({age} {mbti})
            </div>
        </div>
    )
}

export default InputExam;