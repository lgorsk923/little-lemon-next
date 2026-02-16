import Image from "next/image"
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white px-5 py-4">
            <div className='grid grid-cols-3'>
                <div className='col-span-2'>
                    <div className='flex'>
                        <Image src='/silouhette_logo-removebg-preview.png' alt='Little Lemon Logo' className='justify-self-start' width={50} height={50} />
                        <h1 className='self-center font-bold'>Contact Us</h1>
                    </div>
                    <div className='ms-5'>
                        <p> 1234 Straight Street</p>
                        <p> Chicago, IL 60001</p>
                        <p> 123-456-7890</p>
                        <p>contactlittlelemon@gmail.com</p>
                    </div>
                </div>
                <p className='flex mt-3 justify-end self-end'>&copy; 2024 All rights reserved.</p>
            </div>
        </footer>
    );
}