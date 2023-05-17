'use client';

import { useState } from "react";
import Modal from "./suohui/Modal";
import Input from "./suohui/Input";
import Button from "./suohui/Button";
import { AiFillGithub } from "react-icons/ai";
import DropList from "./suohui/DropList";
import Drawer from "./suohui/Drawer";
import CheckBox from "./suohui/CheckBox";
import Skeleton from "./suohui/Skeleton";
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

const ModalTest = () => {
    const [modal, setModal] = useState<boolean>(false)
    const [text, setText] = useState<string>('')
    const [toggle, setIsToggle] = useState(false);
    const [checkbox, setCheckbox] = useState(false);

    const dropTestLists = [
        {text: 'aadfdfdf1', onClick: () => {console.log('aa')}},
        {text: 'aadfdfdf2', onClick: () => {console.log('bb')}},
        {text: 'aadfdfdf3', onClick: () => {console.log('bb')}},
    ]

    const sideBarTestLists = [
        {text: 'aaaaa1', onClick: () => {console.log('aa')}},
        {text: 'bbbbb2', onClick: () => {console.log('bb')}},
        {text: 'ccccc3', onClick: () => {console.log('bb')}},
    ]

    const scss = () => toast.success("성공함", {position: toast.POSITION.TOP_RIGHT})

    const errr = () => toast.error("에러임", {position: toast.POSITION.TOP_RIGHT});

    const warn = () => toast.warning("경고임", {position: toast.POSITION.TOP_RIGHT});

    const info = () => toast.info("인포임", {position: toast.POSITION.TOP_RIGHT});

  return (
    <div>
        <Drawer 
            title='타이틀입니다'
            items={sideBarTestLists}
        />
        <button
            onClick={() => setModal(true)}
        >
            모달열기
        </button>
        <Modal 
            isOpen={modal}
            onClose={() => setModal(false)}
            title='타이틀테스트'
            body='바디'
        />
        <Input 
            value={text}
            onChange={(e) => setText(e.target.value)}
            label='인풋'
            width={500}
        />
        <Input 
            value={text}
            onChange={(e) => setText(e.target.value)}
            label='인풋'
            width={700}
            small={true}
        />
        <Button 
            label='테스트버튼'
            onClick={() => {}}
            // icon={<AiFillGithub size={24} />}
            width={400}
        />

        <DropList
            toggle={toggle}
            top={36}
            postion="left"
            items={dropTestLists}
            dropWidth={200}
            onClose={() => {setIsToggle(false)}}
        >
            <button
                onClick={() => {setIsToggle((prev) => !prev)}}
                className="border-2 border-rose-600"
            >
                드랍테스트
            </button>
        </DropList>
        <CheckBox 
            check={checkbox}
            onClick={() => setCheckbox(!checkbox)}
        />
        <Skeleton shape="w-20 h-20 rounded-md"/>

        <button onClick={scss} >성공버튼</button>
        <button onClick={errr} >에러버튼</button>
        <button onClick={warn} >경고버튼</button>
        <button onClick={info} >인포버튼</button>
        <ToastContainer
          position="top-center"
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
    </div>
  )
}

export default ModalTest
