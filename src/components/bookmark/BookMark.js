import React from 'react';
import './bookmark.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function BookMark(){
    return (
        <div className='container-bar'>
            <div>
                <a href="#" className='me-4 text-reset icon-facebook'><span id='title'>Facebook</span><i class="bi bi-facebook"></i></a>
                <a href="#" className='me-4 text-reset icon-twitter'><span id='title'>Twitter</span><i class="bi bi-twitter-x"></i></a>
                <a href="#" className='me-4 text-reset icon-google'><span id='title'>Google</span><i class="bi bi-envelope-at-fill"></i></a>
                <a href="#" className='me-4 text-reset icon-linkedin'><span id='title'>Linkedin</span><i class="bi bi-linkedin"></i></a>
                <a href="#" className='me-4 text-reset icon-github'><span id='title'>GitHub</span><i class="bi bi-github"></i></a>
                <a href="#" className='me-4 text-reset icon-pinterest'><span id='title'>Pinterest</span><i class="bi bi-pinterest"></i></a>
                <a href="#" className='me-4 text-reset icon-whatsapp'><span id='title'>Whatsapp</span><i class="bi bi-whatsapp"></i></a>
            </div>
        </div>
    );
}