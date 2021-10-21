import React from 'react';
import img from '../../Images/campus-900x0.png'
import './AboutIstDetails.css'

const AboutIstDetails = () => {
    return (
        <div className='about-ist'>
            <img className='w-50' src={img} alt="" />
            <br />
            <hr />
            <h3>HISTORY OF IST</h3>
            <p>Institute of Science and Technology (IST) was established in 1993, the first Institute in Bangladesh conducting Honors in Computer Science affiliated with National University. It was founded by Prof. Dr. Shahida Rafique, University of Dhaka. Inaugurated in the presence of Nobel Laureate Professor Dr. Abdus Salam and by the then Honorable Prime Minister of Bangladesh. Its a completely non-profit, non-government and non-political Institute.</p>
            <br />
            <hr />
            <h4>WHY STUDY IN IST</h4>
            <p><span className='text-primary'>Institute of Science and Technology (IST)</span>, affiliated with National University, Bangladesh, is celebrating its 28th anniversary this year. Over the last decade, IST has earned local and global reputation by creating highly qualified Computer Experts, Scientists and Business Experts of highest potential. Our objective is to empower the younger generation and make a contribution to the nation to help uplift the progress in business, technology and also to formulate policy for overall development of the country. We pledge to ensure the quality of life by ensuring the quality of education. The Institute is regulated by a strong Governing Body consisting of eminent Professors of Dhaka University,Subjects Experts, within the rules and regulations of <span className='text-primary'>National</span> University of Bangladesh.</p>
            <br />
            <hr />
            <h3 className='text-primary'>CAREER OPTION</h3>
            <ul><p>IST maintains excellent industrial relationsips with various national and international organizations. IST students have a great opportunity to enroll within these organizations after the graduation. Among these the major organizations are –</p>
                <li>Samsung R&D</li>
                <li>Kona Software Lab Limited</li>
                <li>Divine IT Limited</li>
                <li>Pathao</li>
                <li>LEADS Corporation</li>
                <li>DataSoft</li>
                <li>Samsung Bangladesh R&D Center Ltd</li>
                <li>Bangladesh Internet Press Ltd. (BIPL)</li>
                <li>Tiger IT</li>
                <li>Brac Bank</li>
                <li>Premier Bank Ltd</li>
                <li>Trust Bank Limited</li>
                <li>Export Import Bank of Bangladesh Limited</li>
                <li>South East Bank</li>
                <li>Grameen Phone</li>
                <li>Grameenphone IT Ltd</li>
                <li>Ranks IT</li>
                <li>Bangladesh Japan Information Technology (BJIT)</li>
            </ul>
        </div>
    );
};

export default AboutIstDetails;