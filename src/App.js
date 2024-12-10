import { FaArrowTrendUp } from "react-icons/fa6";
import './App.css';
import { IoHomeOutline } from "react-icons/io5";
import { LuLayout } from "react-icons/lu";
import { FaLayerGroup } from "react-icons/fa6";
import { IoBookOutline } from "react-icons/io5";
import { IoPersonAdd } from "react-icons/io5";
import { IoHelpCircleSharp } from "react-icons/io5";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { FaRegFileAlt } from "react-icons/fa";
import { LuBox } from "react-icons/lu";
import { FaGitlab } from "react-icons/fa6";
import { MdOutlineKeyboardCommandKey } from "react-icons/md";
import { FaFeather } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { LuPieChart } from "react-icons/lu";
import { LiaMapSolid } from "react-icons/lia";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { CiBrightnessUp } from "react-icons/ci";
import { FaBell } from "react-icons/fa6";
import { MdPerson } from "react-icons/md";
import { FaArrowUpLong } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
import { TiStar } from "react-icons/ti";
import { FaSquareCaretUp } from "react-icons/fa6";
import { SlEnergy } from "react-icons/sl";
import { IoLocationOutline } from "react-icons/io5";
import image1 from "./image/avatar-1.jpg";
import image2 from "./image/avatar-2.jpg";
import image3 from "./image/avatar-3.jpg";
import image4 from "./image/avatar-4.jpg";
import image5 from "./image/avatar-5.jpg";
import { IoMdSettings } from "react-icons/io";
import { GoShareAndroid } from "react-icons/go";
import { RiLockPasswordLine } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";

import LineChart from "./linchart";
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';

Chart.register(CategoryScale);



function App() {




  return (
    <>
      <div className="all flex">
        <div className="App">
          <div className="flex gap-2 pl-3 pt-5 items-center">
            <FaArrowTrendUp className="bg-cyan-300	text-4xl p-2 rounded-lg" />
            <h1>Datta Able</h1>
          </div>

          {/* navigation */}
          <div className="navi text-xs pt-2">
            <p className="pl-2">NAVIGATION</p>

            <ul class="flex flex-col gap-2 max-w-[280px] mx-auto">
              <li>
                <details class="group">
                  <summary
                    class="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                    <span class="flex gap-2">
                      <span className="flex items-center gap-5">
                        <IoHomeOutline />
                        Dashboard
                      </span>
                    </span>
                    <svg class="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                      width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                      </path>
                    </svg>
                  </summary>
                  <article class="px-4 pb-4">
                    <ul class="flex flex-col gap-4 pl-2 mt-4">
                      <li class="flex gap-2">
                        <a href="#">
                          Default
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Ecommerce
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          CRM
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Analytics
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Crypto
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Finance
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Project
                        </a>
                      </li>
                    </ul>
                  </article>
                </details>
              </li>
            </ul>

            <ul class="flex flex-col gap-2 max-w-[280px] mx-auto">
              <li>
                <details class="group">
                  <summary
                    class="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                    <span class="flex gap-2">
                      <span className="flex items-center gap-5">
                        <LuLayout />
                        Layout
                      </span>
                    </span>
                    <svg class="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                      width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                      </path>
                    </svg>
                  </summary>
                  <article class="px-4 pb-4">
                    <ul class="flex flex-col gap-4 pl-2 mt-4">
                      <li class="flex gap-2">
                        <a href="#">
                          Vertical
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Horizantal
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Compact
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Tab
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Layout 2
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Layout 3
                        </a>
                      </li>
                    </ul>
                  </article>
                </details>
              </li>
            </ul>

            <ul class="flex flex-col gap-2 max-w-[280px] mx-auto">
              <li>
                <details class="group">
                  <summary
                    class="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                    <span class="flex gap-2">
                      <span className="flex items-center gap-5">
                        <FaLayerGroup />
                        Widget
                      </span>
                    </span>
                    <svg class="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                      width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                      </path>
                    </svg>
                  </summary>
                  <article class="px-4 pb-4">
                    <ul class="flex flex-col gap-4 pl-2 mt-4">
                      <li class="flex gap-2">
                        <a href="#">
                          Static
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Data
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Table
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          User
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Chart
                        </a>
                      </li>
                    </ul>
                  </article>
                </details>
              </li>
            </ul>
          </div>

          {/* admin pannel */}
          <div className="navi text-xs pt-2">
            <p className="pl-2">ADMIN PANEL</p>

            <ul class="flex flex-col gap-2 max-w-[280px] mx-auto">
              <li>
                <details class="group">
                  <summary
                    class="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                    <span class="flex gap-2">
                      <span className="flex items-center gap-5">
                        <IoBookOutline />
                        Online Courses
                      </span>
                    </span>
                    <svg class="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                      width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                      </path>
                    </svg>
                  </summary>
                  <article class="px-4 pb-4">
                    <ul class="flex flex-col gap-4 pl-2 mt-4">
                      <li class="flex gap-2">
                        <a href="#">
                          Dashboard
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Teacher
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Student
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Course
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Pricing
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Site
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Setting
                        </a>
                      </li>
                    </ul>
                  </article>
                </details>
              </li>
            </ul>

            <ul class="flex flex-col gap-2 max-w-[280px] mx-auto">
              <li>
                <details class="group">
                  <summary
                    class="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                    <span class="flex gap-2">
                      <span className="flex items-center gap-5">
                        <IoPersonAdd />
                        Menbership
                      </span>
                    </span>
                    <svg class="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                      width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                      </path>
                    </svg>
                  </summary>
                  <article class="px-4 pb-4">
                    <ul class="flex flex-col gap-4 pl-2 mt-4">
                      <li class="flex gap-2">
                        <a href="#">
                          Dashboard
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          List
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Pricing
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Setting
                        </a>
                      </li>
                    </ul>
                  </article>
                </details>
              </li>
            </ul>

            <ul class="flex flex-col gap-2 max-w-[280px] mx-auto">
              <li>
                <details class="group">
                  <summary
                    class="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                    <span class="flex gap-2">
                      <span className="flex items-center gap-5">
                        <IoHelpCircleSharp />
                        Helpdesk
                      </span>
                    </span>
                    <svg class="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                      width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                      </path>
                    </svg>
                  </summary>
                  <article class="px-4 pb-4">
                    <ul class="flex flex-col gap-4 pl-2 mt-4">
                      <li class="flex gap-2">
                        <a href="#">
                          Dashboard
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Ticket
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Customer
                        </a>
                      </li>
                    </ul>
                  </article>
                </details>
              </li>
            </ul>
            <ul class="flex flex-col gap-2 max-w-[280px] mx-auto">
              <li>
                <details class="group">
                  <summary
                    class="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                    <span class="flex gap-2">
                      <span className="flex items-center gap-5">
                        <LiaFileInvoiceSolid />
                        Invoice
                      </span>
                    </span>
                    <svg class="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                      width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                      </path>
                    </svg>
                  </summary>
                  <article class="px-4 pb-4">
                    <ul class="flex flex-col gap-4 pl-2 mt-4">
                      <li class="flex gap-2">
                        <a href="#">
                          Dashboard
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Create
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Details
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          List
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Edit
                        </a>
                      </li>
                    </ul>
                  </article>
                </details>
              </li>
            </ul>
          </div>

          {/* ui components */}
          <div className="navi text-xs pt-2">
            <p className="pl-2">UI COMPONENTS</p>

            <ul class="flex flex-col gap-2 max-w-[280px] mx-auto">
              <li>
                <details class="group">
                  <summary
                    class="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                    <span class="flex gap-2">
                      <span className="flex items-center gap-5">
                        <LuBox />
                        Basic
                      </span>
                    </span>
                    <svg class="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                      width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                      </path>
                    </svg>
                  </summary>
                  <article class="px-4 pb-4">
                    <ul class="flex flex-col gap-4 pl-2 mt-4">
                      <li class="flex gap-2">
                        <a href="#">
                          Alert
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Button
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Badges
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Breadcrumb
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Cards
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Color
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Collapse
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Carousel
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Dropdowns
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Offcanvas
                        </a>
                      </li>
                    </ul>
                  </article>
                </details>
              </li>
            </ul>

            <ul class="flex flex-col gap-2 max-w-[280px] mx-auto">
              <li>
                <details class="group">
                  <summary
                    class="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                    <span class="flex gap-2">
                      <span className="flex items-center gap-5">
                        <FaGitlab />
                        ADVANCE
                      </span>
                    </span>
                    <svg class="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                      width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                      </path>
                    </svg>
                  </summary>
                  <article class="px-4 pb-4">
                    <ul class="flex flex-col gap-4 pl-2 mt-4">
                      <li class="flex gap-2">
                        <a href="#">
                          Sweet alert
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Datepicker
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Lghtbox
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Modal
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Notification
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Range slider
                        </a>
                      </li>
                    </ul>
                  </article>
                </details>
              </li>
            </ul>

            <ul class="flex flex-col gap-2 max-w-[280px] mx-auto">
              <li>
                <details class="group">
                  <summary
                    class="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                    <span class="flex gap-2">
                      <span className="flex items-center gap-5">
                        <MdOutlineKeyboardCommandKey />
                        ANIMATION
                      </span>
                    </span>
                  </summary>
                </details>
              </li>
            </ul>
            <ul class="flex flex-col gap-2 max-w-[280px] mx-auto">
              <li>
                <details class="group">
                  <summary
                    class="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                    <span class="flex gap-2">
                      <span className="flex items-center gap-5">
                        <FaFeather />
                        Icons
                      </span>
                    </span>
                    <svg class="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                      width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                      </path>
                    </svg>
                  </summary>
                  <article class="px-4 pb-4">
                    <ul class="flex flex-col gap-4 pl-2 mt-4">
                      <li class="flex gap-2">
                        <a href="#">
                          Feauter
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Font Awesome 5
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Materials
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Tabler
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Phosphor
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Custom
                        </a>
                      </li>
                    </ul>
                  </article>
                </details>
              </li>
            </ul>
          </div>

          {/*  forms */}
          <div className="navi text-xs pt-2">
            <p className="pl-2">FORMS</p>

            <ul class="flex flex-col gap-2 max-w-[280px] mx-auto">
              <li>
                <details class="group">
                  <summary
                    class="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                    <span class="flex gap-2">
                      <span className="flex items-center gap-5">
                        <FaRegFileAlt />
                        Form Elements
                      </span>
                    </span>
                    <svg class="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                      width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                      </path>
                    </svg>
                  </summary>
                  <article class="px-4 pb-4">
                    <ul class="flex flex-col gap-4 pl-2 mt-4">
                      <li class="flex gap-2">
                        <a href="#">
                          Form Basic
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Form Floating
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Form mOptions
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Input Groups
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Checkbox
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Radio
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Switch
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Mega option
                        </a>
                      </li>
                    </ul>
                  </article>
                </details>
              </li>
            </ul>

            <ul class="flex flex-col gap-2 max-w-[280px] mx-auto">
              <li>
                <details class="group">
                  <summary
                    class="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                    <span class="flex gap-2">
                      <span className="flex items-center gap-5">
                        <FaRegFileAlt />
                        Forms Plugin
                      </span>
                    </span>
                    <svg class="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                      width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                      </path>
                    </svg>
                  </summary>
                  <article class="px-4 pb-4">
                    <ul class="flex flex-col gap-4 pl-2 mt-4">
                      <li class="flex gap-2">
                        <a href="#">
                          Date
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Select
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Rating
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Google recaptcha
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Input Masks
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Clipboard
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Nouislider
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Bootstrap switch
                        </a>
                      </li>
                    </ul>
                  </article>
                </details>
              </li>
            </ul>

            <ul class="flex flex-col gap-2 max-w-[280px] mx-auto">
              <li>
                <details class="group">
                  <summary
                    class="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                    <span class="flex gap-2">
                      <span className="flex items-center gap-5">
                        <FaRegFileAlt />
                        Text Editor
                      </span>
                    </span>
                    <svg class="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                      width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                      </path>
                    </svg>
                  </summary>
                  <article class="px-4 pb-4">
                    <ul class="flex flex-col gap-4 pl-2 mt-4">
                      <li class="flex gap-2">
                        <a href="#">
                          Tinymce
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Quill
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          CK Editor
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Markdown
                        </a>
                      </li>
                    </ul>
                  </article>
                </details>
              </li>
            </ul>
            <ul class="flex flex-col gap-2 max-w-[280px] mx-auto">
              <li>
                <details class="group">
                  <summary
                    class="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                    <span class="flex gap-2">
                      <span className="flex items-center gap-5">
                        <FaRegFileAlt />
                        Form Layouts
                      </span>
                    </span>
                    <svg class="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                      width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                      </path>
                    </svg>
                  </summary>
                  <article class="px-4 pb-4">
                    <ul class="flex flex-col gap-4 pl-2 mt-4">
                      <li class="flex gap-2">
                        <a href="#">
                          Layouts
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Multicolums
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Actionbars
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Sticky Action Bar
                        </a>
                      </li>
                    </ul>
                  </article>
                </details>
              </li>
            </ul>
            <ul class="flex flex-col gap-2 max-w-[280px] mx-auto">
              <li>
                <details class="group">
                  <summary
                    class="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                    <span class="flex gap-2">
                      <span className="flex items-center gap-5">
                        <FaRegFileAlt />
                        File Upload
                      </span>
                    </span>
                    <svg class="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                      width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                      </path>
                    </svg>
                  </summary>
                  <article class="px-4 pb-4">
                    <ul class="flex flex-col gap-4 pl-2 mt-4">
                      <li class="flex gap-2">
                        <a href="#">
                          Dropzone
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Uppy
                        </a>
                      </li>
                    </ul>
                  </article>
                </details>
              </li>
            </ul>
            <ul class="flex flex-col gap-2 max-w-[280px] mx-auto">
              <li>
                <details class="group">
                  <summary
                    class="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                    <span class="flex gap-2">
                      <span className="flex items-center gap-5">
                        <FaRegFileAlt />
                        Wizard
                      </span>
                    </span>
                  </summary>
                </details>
              </li>
            </ul>
            <ul class="flex flex-col gap-2 max-w-[280px] mx-auto">
              <li>
                <details class="group">
                  <summary
                    class="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                    <span class="flex gap-2">
                      <span className="flex items-center gap-5">
                        <FaRegFileAlt />
                        Form Validation
                      </span>
                    </span>
                  </summary>
                </details>
              </li>
            </ul>
            <ul class="flex flex-col gap-2 max-w-[280px] mx-auto">
              <li>
                <details class="group">
                  <summary
                    class="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                    <span class="flex gap-2">
                      <span className="flex items-center gap-5">
                        <FaRegFileAlt />
                        Image cropper
                      </span>
                    </span>
                  </summary>
                </details>
              </li>
            </ul>
          </div>

          {/* table */}
          <div className="navi text-xs pt-2">
            <p className="pl-2">Table</p>

            <ul class="flex flex-col gap-2 max-w-[280px] mx-auto">
              <li>
                <details class="group">
                  <summary
                    class="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                    <span class="flex gap-2">
                      <span className="flex items-center gap-5">
                        <FaServer />
                        Bootstrap Table
                      </span>
                    </span>
                    <svg class="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                      width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                      </path>
                    </svg>
                  </summary>
                  <article class="px-4 pb-4">
                    <ul class="flex flex-col gap-4 pl-2 mt-4">
                      <li class="flex gap-2">
                        <a href="#">
                          Basic Table
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Sizing Table
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Border Table
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Styling Table
                        </a>
                      </li>
                    </ul>
                  </article>
                </details>
              </li>
            </ul>

            <ul class="flex flex-col gap-2 max-w-[280px] mx-auto">
              <li>
                <details class="group">
                  <summary
                    class="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                    <span class="flex gap-2">
                      <span className="flex items-center gap-5">
                        <FaServer />
                        Vanilla Table
                      </span>
                    </span>
                    <svg class="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                      width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                      </path>
                    </svg>
                  </summary>
                  <article class="px-4 pb-4">
                    <ul class="flex flex-col gap-4 pl-2 mt-4">
                      <li class="flex gap-2">
                        <a href="#">
                          Basic initalization
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Dynamic Import
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Render Columns Cells
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Methods
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Add Rows
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Fetch API
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Filter
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Export
                        </a>
                      </li>
                    </ul>
                  </article>
                </details>
              </li>
            </ul>

            <ul class="flex flex-col gap-2 max-w-[280px] mx-auto">
              <li>
                <details class="group">
                  <summary
                    class="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                    <span class="flex gap-2">
                      <span className="flex items-center gap-5">
                        <FaServer />
                        Data Table
                      </span>
                    </span>
                    <svg class="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                      width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                      </path>
                    </svg>
                  </summary>
                  <article class="px-4 pb-4">
                    <ul class="flex flex-col gap-4 pl-2 mt-4">
                      <li class="flex gap-2">
                        <a href="#">
                          Advance initalization
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Styling
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          API
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Plugin
                        </a>
                      </li>
                    </ul>
                  </article>
                </details>
              </li>
            </ul>
            <ul class="flex flex-col gap-2 max-w-[280px] mx-auto">
              <li>
                <details class="group">
                  <summary
                    class="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                    <span class="flex gap-2">
                      <span className="flex items-center gap-5">
                        <FaServer />
                        DT EXTENSIONS
                      </span>
                    </span>
                    <svg class="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                      width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                      </path>
                    </svg>
                  </summary>
                  <article class="px-4 pb-4">
                    <ul class="flex flex-col gap-4 pl-2 mt-4">
                      <li class="flex gap-2">
                        <a href="#">
                          Autofill
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Button
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Col Recorder
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Fixed Columns
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Fixed Header
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Key Table
                        </a>
                      </li>
                    </ul>
                  </article>
                </details>
              </li>
            </ul>

          </div>

          {/* charts^MAPS */}
          <div className="navi text-xs pt-2">
            <p className="pl-2">Charts ^ Maps</p>

            <ul class="flex flex-col gap-2 max-w-[280px] mx-auto">
              <li>
                <details class="group">
                  <summary
                    class="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                    <span class="flex gap-2">
                      <span className="flex items-center gap-5">
                        <LuPieChart />
                        Charts
                      </span>
                    </span>
                    <svg class="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                      width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                      </path>
                    </svg>
                  </summary>
                  <article class="px-4 pb-4">
                    <ul class="flex flex-col gap-4 pl-2 mt-4">
                      <li class="flex gap-2">
                        <a href="#">
                          APEX Chart
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Piety Chart
                        </a>
                      </li>
                    </ul>
                  </article>
                </details>
              </li>
            </ul>

            <ul class="flex flex-col gap-2 max-w-[280px] mx-auto">
              <li>
                <details class="group">
                  <summary
                    class="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                    <span class="flex gap-2">
                      <span className="flex items-center gap-5">
                        <LiaMapSolid />
                        Maps
                      </span>
                    </span>
                    <svg class="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                      width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                      </path>
                    </svg>
                  </summary>
                  <article class="px-4 pb-4">
                    <ul class="flex flex-col gap-4 pl-2 mt-4">
                      <li class="flex gap-2">
                        <a href="#">
                          Vector Maps
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Gmaps
                        </a>
                      </li>
                    </ul>
                  </article>
                </details>
              </li>
            </ul>
          </div>

          {/* APPLICATION */}
          <div className="navi text-xs pt-2">
            <p className="pl-2">APPLICATION</p>

            <ul class="flex flex-col gap-2 max-w-[280px] mx-auto">
              <li>
                <details class="group">
                  <summary
                    class="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                    <span class="flex gap-2">
                      <span className="flex items-center gap-5">
                        <LuPieChart />
                        Calender
                      </span>
                    </span>
                  </summary>
                </details>
              </li>
            </ul>

            <ul class="flex flex-col gap-2 max-w-[280px] mx-auto">
              <li>
                <details class="group">
                  <summary
                    class="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                    <span class="flex gap-2">
                      <span className="flex items-center gap-5">
                        <LiaMapSolid />
                        Messages
                      </span>
                    </span>
                  </summary>
                </details>
              </li>
            </ul>
            <ul class="flex flex-col gap-2 max-w-[280px] mx-auto">
              <li>
                <details class="group">
                  <summary
                    class="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                    <span class="flex gap-2">
                      <span className="flex items-center gap-5">
                        <LiaMapSolid />
                        Task
                      </span>
                    </span>
                    <svg class="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                      width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                      </path>
                    </svg>
                  </summary>
                  <article class="px-4 pb-4">
                    <ul class="flex flex-col gap-4 pl-2 mt-4">
                      <li class="flex gap-2">
                        <a href="#">
                          List
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Board
                        </a>
                      </li>
                      <li class="flex gap-2">
                        <a href="#">
                          Detail
                        </a>
                      </li>
                    </ul>
                  </article>
                </details>
              </li>
            </ul>
            <ul class="flex flex-col gap-2 max-w-[280px] mx-auto">
              <li>
                <details class="group">
                  <summary
                    class="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                    <span class="flex gap-2">
                      <span className="flex items-center gap-5">
                        <LiaMapSolid />
                        To Do
                      </span>
                    </span>
                  </summary>
                </details>
              </li>
            </ul>
          </div>
        </div>

        <div className="abc ">
          <div className="icons flex justify-between pt-5 text-xl">
            <div className=" flex gap-5 ml-5">
              <FaBars />
              <CiSearch />
            </div>
            <div className="icon flex gap-4">

              <div className="dropdown">
                <button className="btn btn-lg " type="button" data-toggle="dropdown">
                  <CiBrightnessUp />
                </button>
                <div className="dropdown-menu pr-10">
                  <a className="dropdown-item" href="#">
                    <div>
                      <div className="flex items-center gap-3 pl-10">
                        <p>Dark</p>
                      </div>
                      <div className="flex items-center gap-3 pl-10">
                        <p>Light</p>
                      </div>
                      <div className="flex items-center gap-3 pl-10">
                        <p>Default</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="dropdown">
                <button className="btn btn-lg " type="button" data-toggle="dropdown">
                  <IoIosSettings />
                </button>
                <div className="dropdown-menu pr-10">
                  <a className="dropdown-item" href="#">
                    <div>
                      <div className="flex items-center gap-3 pl-10">
                        <MdPerson />
                        <p>My Account</p>
                      </div>
                      <div className="flex items-center gap-3 pl-10">
                        <IoIosSettings />
                        <p>Setting</p>
                      </div>
                      <div className="flex items-center gap-3 pl-10">
                        <BiSupport />
                        <p>Support</p>
                      </div>
                      <div className="flex items-center gap-3 pl-10">
                        <RiLockPasswordLine />
                        <p>Lock Screen</p>
                      </div>

                    </div>
                  </a>
                </div>
              </div>

              <div className="dropdown">
                <button className="btn btn-lg " type="button" data-toggle="dropdown">
                  <FaBell />
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    <div className="flex gap-1 items-center">
                      <div className="w-40">
                        <p>Notification</p>
                      </div>
                      <div>
                        <p>Mark All Read</p>
                      </div>
                    </div>
                    <div>
                      <div className="flex gap-1 items-center">
                        <div className="w-40">
                          <img src={image1} style={{ height: "20" }} />
                        </div>
                        <div>
                          <p>Message</p>
                          <p className="para">Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
                        </div>
                      </div>
                      <div>
                        <p>Yesterday</p>
                        <div className="flex gap-1 items-center">
                          <div className="w-40">
                            <img src={image1} style={{ height: "20" }} />
                          </div>
                          <div>
                            <p>Message</p>
                            <p className="para">Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
                          </div>
                        </div>
                        <div className="flex gap-1 items-center">
                          <div className="w-40">
                            <img src={image1} style={{ height: "20" }} />
                          </div>
                          <div>
                            <p>Message</p>
                            <p className="para">Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
                          </div>
                        </div>
                      </div>
                      <div style={{ padding: "20", width: "200", color: "red", textAlign: "center" }}>
                        <button >Clear All Notification</button>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="dropdown">
                <button className="btn btn-lg " type="button" data-toggle="dropdown">
                  <MdPerson />
                </button>
                <div className="dropdown-menu w-80">
                  <a className="dropdown-item" href="#">
                    <div className="flex gap-1 items-center">
                      <div className="w-40">
                        <img src={image1} style={{ height: "20" }} />
                      </div>
                      <div>
                        <p>Carson Darrin 🖖</p>
                        <p>carson.darrin@company.io</p>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 pl-10">
                        <IoIosSettings />
                        <p>Setting</p>
                      </div>
                      <div className="flex items-center gap-3 pl-10">
                        <GoShareAndroid />
                        <p>Shares</p>
                      </div>
                      <div className="flex items-center gap-3 pl-10">
                        <RiLockPasswordLine />
                        <p>Change Password</p>
                      </div>
                      <div style={{ backgroundColor: "skyblue", padding: "20", width: "200", color: "white", textAlign: "center" }}>
                        <button >Logout</button>
                      </div>
                    </div>
                  </a>
                </div>
              </div>


            </div>
          </div>
          <div className="flex justify-between" >
            <div className="home pl-9 pt-3">
              <p className="text-xl font-medium	">Home</p>
              <div className="page text-sm flex  items-center gap-1 text-base	">
                <a href="#">Home</a>
                <IoIosArrowForward className="text-xs" />
                <a href="#">Dashboard</a>
                <IoIosArrowForward className="text-xs" />
                <a href="#">Home</a>
              </div>
            </div>
            <div className="set">
              <IoMdSettings />
            </div>
          </div>


          <div className="flex">
            <div className="box">
              <p>Daily Sales</p>
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <FaArrowUpLong />
                  <p>$249.95</p>
                </div>
                <div className="box10">
                  <p>67%</p>
                </div>
              </div>
            </div>

            <div className="box">
              <p>Monthly Sales</p>
              <div className="flex justify-between">
                <div className="flex items-center gap-3">
                  <FaArrowDownLong />
                  <p>$2.942.32</p>
                </div>
                <div className="box10">
                  <p>36%</p>
                </div>
              </div>
            </div>

            <div className="box">
              <p>Yearly Sales</p>
              <div className="flex justify-between">
                <div className="flex items-center gap-3">
                  <FaArrowUpLong />
                  <p>$8.368.32</p>
                </div>
                <div className="box10">
                  <p>80%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="map pt-3">
              <p className="text-xl pl-10 font-medium">Users From United States</p>
              <iframe className="pt-4 mr-20" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.3937970627917!2d70.78369207659286!3d22.263067894241463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca5dbb9dce8b%3A0xb806abb2548939fb!2sMavdi%20Chowkdi%2C%20Rajkot%2C%20Gujarat%20360004!5e0!3m2!1sen!2sin!4v1731306638740!5m2!1sen!2sin" width="690" height="430" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div>
              <div className="charts mt-4">
                <LineChart />
              </div>
              <div className="flex gap-6 items-center border mt-3 pt-2 text-xl">
                <div>
                  <SlEnergy style={{ color: "green" }} />
                </div>
                <div>
                  <p>235</p>
                  <p>TOTAL IDEAS</p>
                </div>
              </div>
              <div className="flex gap-5 items-center  border mt-3 pt-2 text-xl">
                <div>
                  <IoLocationOutline style={{ color: "blue" }} />
                </div>
                <div>
                  <p>26</p>
                  <p>TOTAL LOCATIONS</p>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-2">
            <div className="flex">
              <div className="box1 flex justify-between text-xl">
                <p style={{ color: "skyblue", fontSize: 25 }}><FaFacebookF /></p>
                <div>
                  <p className="pl-60">12,281</p>
                  <p className="pl-40"><span style={{ color: "green" }}> +7.2%</span> total likes</p>
                  <div className="flex">
                    <div class="progress7 progress-moved2 mt-3 mr-8">
                      <div class="progress-bar7">
                      </div>
                    </div>
                    <div class="progress7 progress-moved2 mt-3 mr-8">
                      <div class="progress-bar7">
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div className="box1 flex justify-between text-xl">
                <p style={{ color: "skyblue", fontSize: 25 }}><FaTwitter /></p>
                <div>
                  <p className="pl-60">11,200</p>
                  <p className="pl-40"><span style={{ color: "skyblue" }}> +6.2%</span> total likes</p>
                  <div className="flex">
                    <div class="progress7 progress-moved2 mt-3 mr-8">
                      <div class="progress-bar7">
                      </div>
                    </div>
                    <div class="progress7 progress-moved2 mt-3 mr-8">
                      <div class="progress-bar7">
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="box1 flex justify-between text-xl">
                <p style={{ color: "red", fontSize: 25 }} ><IoLogoGoogleplus /></p>
                <div>
                  <p className="pl-60">10,500</p>
                  <p className="pl-40"><span style={{ color: "skyblue" }}> +5.9%</span> total likes</p>
                  <div className="flex">
                    <div class="progress7 progress-moved7 mt-3 mr-8">
                      <div class="progress-bar7">
                      </div>
                    </div>
                    <div class="progress7 progress-moved7 mt-3 mr-8">
                      <div class="progress-bar7">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="rate pl-4">
              <p className="p-3">Rating</p>
              <div className="border"></div>
              <div className="ratee flex gap-48 items-center">
                <div className="flex items-center text-2xl">
                  <p>4.7</p>
                  <TiStar style={{ color: "yellow" }} />
                </div>
                <div className="flex items-center text-2xl">
                  <p>0.4</p>
                  <FaSquareCaretUp style={{ color: "green" }} />
                </div>
              </div>
              <div>
                <div className="flex">
                  <div className="flex items-center">
                    <TiStar style={{ color: "yellow" }} />
                    <p>5</p>
                  </div>
                  <div className="pl-60">
                    <p>384</p>
                  </div>
                </div>
                <div class="progress2 progress-moved">
                  <div class="progress-bar2">
                  </div>
                </div>
              </div>
              <div>
                <div className="flex">
                  <div className="flex items-center">
                    <TiStar style={{ color: "yellow" }} />
                    <p>4</p>
                  </div>
                  <div className="pl-60">
                    <p>145</p>
                  </div>
                </div>
                <div class="progress3 progress-moved1">
                  <div class="progress-bar3">
                  </div>
                </div>
              </div>
              <div>
                <div className="flex">
                  <div className="flex items-center">
                    <TiStar style={{ color: "yellow" }} />
                    <p>3</p>
                  </div>
                  <div className="pl-60">
                    <p>24</p>
                  </div>
                </div>
                <div class="progress4 progress-moved2">
                  <div class="progress-bar4">
                  </div>
                </div>
              </div>
              <div>
                <div className="flex">
                  <div className="flex items-center">
                    <TiStar style={{ color: "yellow" }} />
                    <p>2</p>
                  </div>
                  <div className="pl-60">
                    <p>1</p>
                  </div>
                </div>
                <div class="progress5 progress-moved3">
                  <div class="progress-bar5">
                  </div>
                </div>
              </div>
              <div>
                <div className="flex">
                  <div className="flex items-center">
                    <TiStar style={{ color: "yellow" }} />
                    <p>1</p>
                  </div>
                  <div className="pl-60">
                    <p>0</p>
                  </div>
                </div>
                <div class="progress6 progress-moved4">
                  <div class="progress-bar6">
                  </div>
                </div>
              </div>
            </div>
            <div className=" ratees pt-3">
              <p>Recent Users</p>
              <div className="flex gap-10">
                <div className="images pt-3">
                  <img src={image1} style={{ height: "50" }} />
                </div>
                <div>
                  <p>Isabella Christensen</p>
                  <p>Lorem Ipsum is simply dummy</p>
                </div>
                <div className="flex items-center">

                  <p>11 MAY 12:56</p>
                </div>
                <div className="pt-3 flex gap-3">
                  <button style={{ backgroundColor: "purple", color: "white", borderRadius: 40, padding: 5, width: 90, height: 30 }}>Reject</button>
                  <button style={{ backgroundColor: "lightgreen", color: "white", borderRadius: 40, padding: 5, width: 90, height: 30 }}>Approve</button>
                </div>
              </div>
              <div className="flex gap-10">
                <div className="images pt-3">
                  <img src={image2} />
                </div>
                <div>
                  <p>Isabella Christensen</p>
                  <p>Lorem Ipsum is simply dummy</p>
                </div>
                <div className="flex items-center">

                  <p>11 MAY 12:56</p>
                </div>
                <div className="pt-3 flex gap-3">
                  <button style={{ backgroundColor: "purple", color: "white", borderRadius: 40, padding: 5, width: 90, height: 30 }}>Reject</button>
                  <button style={{ backgroundColor: "lightgreen", color: "white", borderRadius: 40, padding: 5, width: 90, height: 30 }}>Approve</button>
                </div>
              </div>
              <div className="flex gap-10">
                <div className="images pt-3">
                  <img src={image3} />
                </div>
                <div>
                  <p>Isabella Christensen</p>
                  <p>Lorem Ipsum is simply dummy</p>
                </div>
                <div className="flex items-center">

                  <p>11 MAY 12:56</p>
                </div>
                <div className="pt-3 flex gap-3">
                  <button style={{ backgroundColor: "purple", color: "white", borderRadius: 40, padding: 5, width: 90, height: 30 }}>Reject</button>
                  <button style={{ backgroundColor: "lightgreen", color: "white", borderRadius: 40, padding: 5, width: 90, height: 30 }}>Approve</button>
                </div>
              </div>
              <div className="flex gap-10">
                <div className="images pt-3">
                  <img src={image4} />
                </div>
                <div>
                  <p>Isabella Christensen</p>
                  <p>Lorem Ipsum is simply dummy</p>
                </div>
                <div className="flex items-center">

                  <p>11 MAY 12:56</p>
                </div>
                <div className="pt-3 flex gap-3">
                  <button style={{ backgroundColor: "purple", color: "white", borderRadius: 40, padding: 5, width: 90, height: 30 }}>Reject</button>
                  <button style={{ backgroundColor: "lightgreen", color: "white", borderRadius: 40, padding: 5, width: 90, height: 30 }}>Approve</button>
                </div>
              </div>
              <div className="flex gap-10">
                <div className="images pt-3">
                  <img src={image5} />
                </div>
                <div>
                  <p>Isabella Christensen</p>
                  <p>Lorem Ipsum is simply dummy</p>
                </div>
                <div className="flex items-center">

                  <p>11 MAY 12:56</p>
                </div>
                <div className="pt-3 flex gap-3">
                  <button style={{ backgroundColor: "purple", color: "white", borderRadius: 40, padding: 5, width: 90, height: 30 }}>Reject</button>
                  <button style={{ backgroundColor: "lightgreen", color: "white", borderRadius: 40, padding: 5, width: 90, height: 30 }}>Approve</button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <p className="pl-10">Datta able ♥ crafted by Team Codedthemes</p>
            <div className="flex pr-80 gap-5">
              <p><a>Home</a></p>
              <p><a>Documntation</a></p>
              <p><a>Support</a></p>
            </div>
          </div>
        </div>







      </div>
    </>
  );
}

export default App;
