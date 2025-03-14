import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateDemographicForm } from "../actions"; // Redux action
import "../scss/DemographicForm.scss"; // Optional, make sure you have the SCSS file

const DemographicForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [formData, setFormData] = useState({
    gender: "",
    otherGender: "",
    age: "",
    education: "",
    city: "",
    ethnicity: "",
    otherEthnicity: "",
    politicalAffiliation: "",
    otherPoliticalAffiliation:"",
    income: "",
    consentProject: false,
    consentResearch: false,
  });

  const [errors, setErrors] = useState({});

  const validateInputs = () => {
    let tempErrors = {};

    if (formData.age && (isNaN(formData.age) || Number(formData.age) <= 0)) {
      tempErrors.age = "Age must be a positive number";
    }

    if (formData.income && (isNaN(formData.income) || Number(formData.income) < 0)) {
      tempErrors.income = "Income must be a positive number";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    let newValue = type === "checkbox" ? checked : value;

    if (name === "age" || name === "income") {
      newValue = newValue.replace(/\D/g, "");
    }

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateInputs()) return;

    console.log("Form Data Submitted:", formData);

    dispatch(updateDemographicForm(formData));

    history.push("/test/power-happiness");
  };

  return (
    <div className="lg:mx-60">
  <h4 className="center-align">Demographic Information</h4>
  <form onSubmit={handleSubmit}>
  <div className="card">
  <div className="card-content">
          <p style={{ textAlign: "justify" }}>Hi! My name is Darmin Tarasewicz. I am a rising university student. The survey you are about to take is a project for my class.</p>
        </div>
      </div>
    {/* Gender */}
    <div className="card">
      <div className="card-content">
        <label>What is your gender?</label>
        <select
          className="browser-default"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="">Select...</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        {formData.gender === "other" && (
          <div className="input-field">
            <p htmlFor="otherGender">Please specify:</p>
            <input
              type="text"
              id="otherGender"
              name="otherGender"
              value={formData.otherGender}
              onChange={handleChange}
            />
          </div>
        )}
      </div>
    </div>

    {/* Age */}
    <div className="card">
      <div className="card-content">
        <label htmlFor="age">What is your age?</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          className="validate"
        />
        {errors.age && <p className="red-text">{errors.age}</p>}
      </div>
    </div>

    {/* Education */}
    <div className="card">
      <div className="card-content">
        <label>What is your highest level of education?</label>
        <select
          name="education"
          value={formData.education}
          onChange={handleChange}
          className="browser-default"
        >
          <option value="">Select...</option>
          {[
            "No Education",
            "Primary School",
            "Secondary School",
            "Vocational School",
            "High School",
            "Associate Degree",
            "Bachelor's Degree",
            "Master's Degree",
            "Doctoral Degree",
          ].map((edu) => (
            <option key={edu} value={edu}>
              {edu}
            </option>
          ))}
        </select>
      </div>
    </div>

    {/* City */}
    <div className="card">
      <div className="card-content">
        <label htmlFor="city">What city do you live in?</label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="validate"
        />
      </div>
    </div>

    {/* Ethnicity */}
    <div className="card">
      <div className="card-content">
        <label>Ethnicity</label>
        <select
          name="ethnicity"
          value={formData.ethnicity}
          onChange={handleChange}
          className="browser-default"
        >
          <option value="">Select...</option>
         <option value="white">White South African</option>
            <option value="black">Black South African</option>
           <option value="colored">Colored South African</option>
           <option value="asiansa">Asian South African</option>
           <option value="congolese">Congolese</option>
           <option value="kenyan">Kenyan</option>
           <option value="mozambican">Mozambican</option>
           <option value="nigerian">Nigerian</option>
           <option value="somalian">Somalian</option>
           <option value="zimbabwean">Zimbabwean</option>
           <option value="indian">Indian</option>
           <option value="bangladeshi">Bangladeshi</option>
           <option value="italian">Italian</option>
           <option value="british">British</option>
           <option value="other">Other</option>
        </select>
        {formData.ethnicity === "other" && (
          <div className="input-field">
            <p htmlFor="otherEthnicity">Please specify:</p>
            <input
              type="text"
              id="otherEthnicity"
              name="otherEthnicity"
              value={formData.otherEthnicity}
              onChange={handleChange}
            />
          </div>
        )}
      </div>
    </div>

    {/* Political Affiliation */}
    <div className="card">
      <div className="card-content">
        <label>Political Affiliation</label>
        <select
          name="politicalAffiliation"
          value={formData.politicalAffiliation}
          onChange={handleChange}
          className="browser-default"
        >
          <option value="">Select...</option>
          <option value="Did not vote">Did not vote</option>
          <option value="ACTIONSA">ACTIONSA</option>
          <option value="ACDP">ACDP</option>
          <option value="ANC">ANC</option>
          <option value="ATM">ATM</option>
          <option value="ALJAMA">ALJAMA</option>
          <option value="BOSA">BOSA</option>
          <option value="DA">DA</option>
          <option value="EFF">EFF</option>
          <option value="VF+">VF+</option>
          <option value="GOOD">GOOD</option>
          <option value="IFP">IFP</option>
          <option value="CCC">CCC</option>
          <option value="PAC">PAC</option>
          <option value="PA">PA</option>
          <option value="RISE">RISE</option>
          <option value="MK">MK</option>
          <option value="UAT">UAT</option>
          <option value="UDM">UDM</option>
            <option value="other">Other</option>
        </select>
        {formData.politicalAffiliation === "other" && (
          <div className="input-field">
            <p htmlFor="otherPoliticalAffiliation">Please specify:</p>
            <input
              type="text"
              id="otherPoliticalAffiliation"
              name="otherPoliticalAffiliation"
              value={formData.otherPoliticalAffiliation}
              onChange={handleChange}
            />
          </div>
        )}
      </div>
    </div>

    {/* Income */}
    <div className="card">
      <div className="card-content">
        <label htmlFor="income">How much money do you make in a year?</label>
        <input
          type="number"
          id="income"
          name="income"
          value={formData.income}
          onChange={handleChange}
          className="validate"
          placeholder="R0"
        />
        {errors.income && <p className="red-text">{errors.income}</p>}
      </div>
    </div>

   {/* Consent Information */}
   <div className="card">
      <div className="card-content">
        <p style={{ textAlign: "justify" }}>
              <strong>PRINCIPAL INVESTIGATOR</strong>
              <br /> Darmin Tarasewicz
              <br /> Torrey Pines High School
              <br /> 3710 Del Mar Heights Rd, San Diego, California, United
              States 92130
              <br /> +1 (619) 714 - 0293
              <br /> saresearch25@gmail.com
              <br />
              <strong>PURPOSE OF STUDY</strong>
              <br /> You are being asked to take part in a research study.
              Before you decide to participate in this study, it is important
              that you understand why the research is being done and what it
              will involve. Please read the following information carefully.
              Please ask the researcher if there is anything that is not clear
              or if you need more information.
              <br /> The purpose of this study is to investigate the differences
              in attitude toward different immigrant groups in South Africa.
              <br />
              <strong>STUDY PROCEDURES</strong>
              <br /> This study is optional and can be quit at any time. Any
              data from incomplete surveys are not saved and will not be used in
              the final paper. This study will ask optional demographic
              questions (which were above), then will move on to questions where you will categorize certain words as either foreigner or
              South African, and good or bad person.
              <br />
              <strong>BENEFITS</strong> <br />There is a possibility of being compensated R100. To
              enter, you need email saresearch25@gmail.com with a picture of your results screen with the notification that results have been saved. The researcher will only compensate the first 10 emails received. We hope that
              the information obtained from this study may give insight into
              attitudes towards different immigrant groups.
              <br />
              <strong>CONFIDENTIALITY</strong>
              <br /> Your responses to this survey will be anonymous. Every effort will be made by the researcher to preserve
              your confidentiality, including the following:
              <br />
              No names will be asked for in this survey. The only information
              tied to you are the above demographic questions. All responses are
              also locked behind a secured google account and cannot be accessed
              by anyone except the researcher.
              <br />
              <strong>CONTACT INFORMATION</strong>
              <br /> If you have questions at any time about this study, or you
              experience adverse effects as the result of participating in this
              study, you may contact the researcher whose contact information is
              provided above. If you have questions regarding your
              rights as a research participant, or if problems arise which you
              do not feel you can discuss with the Primary Investigator, please
              contact Michael Montgomery at +1 (858) 755-0125, ext. 2137.
              <br />
              <strong>VOLUNTARY PARTICIPATION</strong>
              <br /> Your participation in this study is voluntary. If you
              decide to take part in this study, you will be asked to agree to
              this consent form. After you agree to this consent form, you are
              still free to withdraw at any time and without giving a reason. If you withdraw from the study before data collection is completed, your data will be destroyed.
              <br />
              <strong>CONSENT</strong>
              <br /> I have read and I understand the provided information and
              have had the opportunity to ask questions. I understand that my
              participation is voluntary and that I am free to withdraw at any
              time, without giving a reason and without cost. I voluntarily
              agree to take part in this study.
            </p>
          </div>
        </div>

    {/* Consent Checkboxes */}
    <div className="card">
      <div className="card-content ">
        <label>
          <input
            type="checkbox"
            name="consentProject"
            checked={formData.consentProject}
            onChange={handleChange}
          />
          <span className="mb-4">I consent to participate in this project</span>
        </label>
        <label>
          <input
            type="checkbox"
            name="consentResearch"
            checked={formData.consentResearch}
            onChange={handleChange}
          />
          <span>I consent to my responses being used in research</span>
        </label>
      </div>
    </div>

    {/* Submit Button */}
    <div className="center-align">
      <button type="submit" className="btn waves-effect waves-light red">
        Complete
      </button>
    </div>
  </form>
</div>

  );
};

export default DemographicForm;
