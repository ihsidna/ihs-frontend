import { ErrorMessage, Field, Form, Formik } from "formik";
import usePatch from "../../../hooks/usePatch";
import { useQueryClient } from "@tanstack/react-query";

const UpdatePhoneNumberForm = ({
  handleCancelClick,
  setFormSuccess,
  formProps,
}) => {
  const initialValues = { phone: formProps.phone };
  const updatePhoneNumberMutation = usePatch();
  const queryClient = useQueryClient();

  const handleSubmit = async (values) => {
    updatePhoneNumberMutation.mutate(
      { url: "/user/update", body: { phone: values.phone } },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(["userProfile"]);
          setFormSuccess(true);
        },
      }
    );
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex gap-x-2 items-center justify-center justify-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 text-ihs-green self-center"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
            />
          </svg>
          <h2 className="md:text-xl font-semibold text-gray-800">
            Update Phone Number
          </h2>
        </div>
        <span
          className="mr-4 font-bold cursor-pointer text-xl text-[red] hover:text-ihs-green transition-all"
          onClick={() => handleCancelClick()}
        >
          ⨉
        </span>
      </div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ errors }) => (
          <Form className="grid gap-y-3 mt-8">
            <div className="grid">
              <label htmlFor="phone" className="text-xs mb-1 font-light text-gray-600">
                Phone Number
                <span className="text-red-600">*</span>
              </label>
              <Field
                autoFocus={true}
                required
                type="phone"
                name="phone"
                id="phone"
                placeholder="Phone Number"
                autoComplete="true"
                className="transition border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-1"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className={`${
                  errors.phone ? "animate-fly-in-y" : "animate-fly-out-y"
                } text-red-500 text-xs mt-1 transition-all duration-500`}
              />
            </div>

            <div className="flex mt-2">
              <button
                className="transition flex-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-ihs-green md:text-base text-sm font-medium rounded-md"
                onClick={handleCancelClick}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="transition disabled:bg-ihs-green-shade-200 disabled:text-slate-600 disabled:border-slate-200 disabled:shadow-none flex-1 px-4 py-2 ml-2 text-white md:text-base text-sm font-medium rounded-md bg-ihs-green"
                disabled={
                  updatePhoneNumberMutation.isLoading ||
                  Object.keys(errors).length > 0
                }
              >
                {updatePhoneNumberMutation.isLoading
                  ? "Please wait..."
                  : "Submit"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UpdatePhoneNumberForm;
