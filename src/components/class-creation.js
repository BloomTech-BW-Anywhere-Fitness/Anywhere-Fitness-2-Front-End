import React from "react";
import class_form from "./class-creation-form";
import { classSchema } from '../Validations/classValidation';

export default function create_class(){
    
    const createClass = async (event) => {
        event.preventDefault()
        let classData = {
            className: event.target[0].value,
            classType: event.target[1].value,
            classDate: event.target[2].value,
            classTime: event.target[3].value,
            classDuration: event.target[4].value,
            classIntensity: event.target[5].value,
            classLocation: event.target[6].value,
            classAttendee: event.target[7].value,

        }
        console.log(classData);
        const isValid = await classSchema.isValid(classData);
        console.log(isValid);
    }
    
    return(
        <div className="Creation_form">
            <class_form />
        </div>
    );
}