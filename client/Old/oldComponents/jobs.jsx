import React, { useEffect, useState } from "react";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";



// export default Jobs;
