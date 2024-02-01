import React from 'react';
import PropTypes from 'prop-types';

//Este componente esta diseñado bajo el patron de diseño compount Components y asi se optimiza la carga de sus parte y es mas facil de entender al desarrollador.

const ContactForm = ({ action, method, title, subtitle, children }) => {
  return (
    <section className="m-10 bg-white">
      <div className="text-center py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
          {title}
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
          {subtitle}
        </p>
        <form action={action} method={method} className="space-y-8">
          {children}
        </form>
      </div>
    </section>
  );
};

const FormGroup = ({ label, icon, children }) => (
  <div>
    <label htmlFor={label.toLowerCase()} className="block mb-2 text-sm font-medium text-gray-900">
      {label}
      {icon && React.cloneElement(icon, { className: 'flex mx-auto text-[#3fccebfa]' })}
    </label>
    {children}
  </div>
);

const TextInput = ({ name, placeholder, required }) => (
  <input
    type="text"
    name={name}
    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 textt-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
    placeholder={placeholder}
    required={required}
  />
);

const EmailInput = ({ name, placeholder, required }) => (
  <input
    type="email"
    name={name}
    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 textt-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
    placeholder={placeholder}
    required={required}
  />
);

const TextArea = ({ name, placeholder, required }) => (
  <textarea
    name={name}
    rows="6"
    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
    placeholder={placeholder}
    required={required}
  />
);

const SubmitButton = ({ label, icon }) => (
  <button
    type="submit"
    className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-[#3fccebfa] hover:bg-[#67c8e6fa]"
  >
    {label}
    {icon && React.cloneElement(icon, { className: 'flex mx-auto text-[#fffffffa]' })}
  </button>
);

ContactForm.propTypes = {
  action: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

FormGroup.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.element,
  children: PropTypes.node.isRequired,
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

EmailInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

SubmitButton.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.element,
};

export { ContactForm, FormGroup, TextInput, EmailInput, TextArea, SubmitButton };
