//GameVerseProjectImports
import gvHomepage from '../assets/project_GameVerse/HomePage.png';
import gvLoginpage from '../assets/project_GameVerse/Login.png';
import gvSignuppage from '../assets/project_GameVerse/Signup.png';
import gvLearnorDie from '../assets/project_GameVerse/LearnorDie.png';
import gvTressurehunt from '../assets/project_GameVerse/Tressurehunt.png';
import gvMurderMystryHomePage from '../assets/project_GameVerse/MurderMystryHomePage.png';
import gvMurderMystry from '../assets/project_GameVerse/MurderMystry.png';
import gvtictactoe from '../assets/project_GameVerse/tictactoe.png';
import gvprofile from '../assets/project_GameVerse/profile.png';

//SalesSahayakProjectImports
import ssaddCustomerPage from '../assets/project_SalesSahayak/addCustomerPage.png'
import ssaddEnquiryPage from '../assets/project_SalesSahayak/addEnquiryPage.png'
import ssaddPaymentPage from '../assets/project_SalesSahayak/addPaymentPage.png'
import ssaddCustomerDetailsPage from '../assets/project_SalesSahayak/addCustomerPage.png'
import ssallCustomerDetailsPage from '../assets/project_SalesSahayak/allCustomerDetailsPage.png'
import ssallEnquiryDetailsPage from '../assets/project_SalesSahayak/allEnquiryDetailsPage.png'
import ssallOrderDetailsPage from '../assets/project_SalesSahayak/allOrderDetailsPage.png'
import ssallPaymentDetailsPage from '../assets/project_SalesSahayak/allPaymentPage.png'
import ssenquiryDetailsPage from '../assets/project_SalesSahayak/enquiryDetailsPage.png'
import ssHomePage from '../assets/project_SalesSahayak/homePage.png'
import ssloginPage from '../assets/project_SalesSahayak/loginPage.png'
import ssorderDetailsPage from '../assets/project_SalesSahayak/orderDetailsPage.png'
import ssprofilePage from '../assets/project_SalesSahayak/profilePage.png'
import sswelcomePage from '../assets/project_SalesSahayak/welcomePage.png'


const projects=[
    {
        id:1,
        name:"Sales Sahayak",
        description:` The majority of small-scale companies are still storing their sales, 
        etc information about the enquiry, and pending payments in basic Excel sheets which are not that
         good looking or understandable by a different employee who will manage this data and also they are
          not managed properly because of that followup to the enquiry of customers are not done timely and 
          companies loses the orders. Here our project SalesSahayak Comes into play, it will store all enquiries 
          from customers, orders from customers, and pending payment orders. It will also store the contact 
          information of the customer/company. Thus on our website, an employee of that company can enter data 
          like new enquiries, new customers, regular orders which come without enquiry, pending payment etc. 
          However, this information will be different for every employee because every employee will be handling 
          different clients. The information on the enquiry, orders, and payments of all the employees will be visible 
          to the owner of the company with his/her special login account. 
            In this way, our website will help businesses to streamline their sales department.`,
        basedon:"Asp.net(Webforms), C#, HTML, CSS",
        status:"Completed",
        images:[sswelcomePage,ssloginPage,ssHomePage,ssprofilePage,ssaddCustomerPage,ssaddEnquiryPage,ssaddPaymentPage,ssaddCustomerDetailsPage,
            ssallCustomerDetailsPage,ssallEnquiryDetailsPage,ssallOrderDetailsPage,ssallPaymentDetailsPage,
            ssenquiryDetailsPage,ssorderDetailsPage
        ]
    },
    {
        id:2,
        name:"GameVerse",
        description:`GameVerse is a desktop-based game platform developed using Pygame and Tkinter. 
                    It offers users a collection of fun and interactive games with a simple GUI for easy navigation. 
                    The platform allows players to choose games, track their scores or progress, and enjoy an engaging 
                    experience—all within a unified interface. Designed for casual gamers and programming enthusiasts, 
                    GameVerse also serves as a learning tool to help beginners understand Python programming through game 
                    development.`,
        basedon:"Python, Tkinter(Python Library), Pygame(Python Library)",
        status:"Completed",
        images:[gvHomepage,gvLoginpage,gvSignuppage,gvLearnorDie,gvTressurehunt,gvMurderMystryHomePage,gvMurderMystry,gvtictactoe,gvprofile] }
]

export default projects;