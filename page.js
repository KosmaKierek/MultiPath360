"use client"
import React, {useState, useEffect} from 'react'
import * as THREE from "three"
import { GLTFLoader } from 'three/examples/jsm/Addons.js'

const Home = () => {

    const canvasRef=useRef(null)

    return (
        <div className='grid place-items-center'>
            <h1>Cameras</h1>
            <div className='flex justify-center mb-8'>
                <img src="images/cam/cam1.jpg"></img>
                <img src="images/cam/cam2.jpg"></img>
                <img src="images/cam/cam3.jpg"></img>
            </div>
            <div ref={canvasRef}></div>
        </div>
    )
}

export default Home