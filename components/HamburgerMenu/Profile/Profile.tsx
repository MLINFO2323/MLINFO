import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image";
import React, { useState } from "react"
import style__ from "./Profile.module.css"
const Profile = () => {
    const sesh = useSession();
    console.log(sesh.data.user.image)
    return <div className={style__.holder}>
        <img src={sesh.data.user.image} alt="profile pic" className={style__.profile_pic}></img>
        <div className={style__.name_holder}>
            <div className={style__.name}>
                {sesh.data.user.name}
            </div>
            <div className={style__.email}>
                {sesh.data.user.email}
            </div>
            <div className={style__.logout} onClick={() => { signOut() }}>
                Log out
            </div>
        </div>
    </div >
}

export default Profile;