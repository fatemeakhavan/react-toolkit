import { useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { addProduct } from "./product-slice";

interface IProductFormData {
  name: string;
  price: string;
  imag: string;
  description: string;
}

interface IProductFormError {
  name?: string;
  price?: string;
  imag?: string;
  description?: string;
}

const ProductForm = () => {
  const [formData, setFormData] = useState<IProductFormData>({
    name: "",
    price: "",
    imag: "",
    description: "",
  });

  const [error, setError] = useState<IProductFormError>({
    name: "",
    price: "",
    imag: "",
    description: "",
  });

  const dispatch = useAppDispatch();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newError: IProductFormError = {};

    if (!formData.name.trim()) {
      newError.name = "اسم الزامی است";
    } else if (formData.name.length < 2) {
      newError.name = "اسم باید حداقل 2 تا کارکتر باشد";
    }

    if (!formData.price.trim()) {
      newError.price = "قیمت الزامی است";
    } else if (Number(formData.price) <= 0) {
      newError.price = "قیمت باید بیشتر از صفر باشد";
    }

    if (!formData.description.trim()) {
      newError.description = "توضیحات الزامی است";
    } else if (formData.description.length < 10) {
      newError.description = "توضیحات باید حداقل 10 تا کارکتر باشد";
    }

    if (!formData.imag.trim()) {
      newError.imag = "عکس الزامی است";
    }

    setError(newError);

    return Object.keys(newError).length === 0;
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.stopPropagation();
    e.preventDefault();
    const isValid = validateForm();
    if (!isValid) return;

    dispatch(
      addProduct({
        name: formData.name,
        price: Number(formData.price),
        imag: formData.imag,
        description: formData.description,
      }),
    );

    setFormData({
      name: "",
      price: "",
      imag: "",
      description: "",
    });

    setError({});
  };

  return (
    <form className="container-form" onSubmit={(e) => handleSubmit(e)}>
      <div className="container-input">
        <label className="label" htmlFor="input-name">
          نام محصول:
        </label>
        <input
          required
          className="input"
          id="input-name"
          type="text"
          aria-describedby={error.name ? "error-name" : undefined}
          aria-invalid={!!error.name}
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {error.name && (
          <p id="error-name" className="message-error" role="alert">
            {error.name}
          </p>
        )}
      </div>

      <div className="container-input">
        <label className="label" htmlFor="input-price">
          قیمت محصول :
        </label>
        <input
          required
          id="input-price"
          type="number"
          inputMode="numeric"
          aria-describedby={error.price ? "error-price" : undefined}
          aria-invalid={!!error.price}
          className="input"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
        {error.price && (
          <p id="error-price" className="message-error" role="alert">
            {error.price}
          </p>
        )}
      </div>

      <div className="container-input">
        <label className="label" htmlFor="input-imag">
          عکس محصول :
        </label>
        <input
          required
          id="input-imag"
          aria-describedby={error.imag ? "error-imag" : undefined}
          aria-invalid={!!error.imag}
          type="url"
          inputMode="url"
          name="imag"
          className="input"
          value={formData.imag}
          onChange={(e) => handleChange(e)}
        />
        {error.imag && (
          <p id="error-imag" className="message-error" role="alert">
            {error.imag}
          </p>
        )}
      </div>

      <div className="container-input">
        <label className="label" htmlFor="input-description">
          توضیحات محصول:
        </label>
        <textarea
          required
          id="input-description"
          aria-invalid={!!error.description}
          aria-describedby={error.description ? "error-description" : undefined}
          name="description"
          className="textarea"
          value={formData.description}
          onChange={handleChange}
        />
        {error.description && (
          <p id="error-description" className="message-error" role="alert">
            {error.description}
          </p>
        )}
      </div>

      <button className="btn-submit" type="submit">
        اضافه کردن محصول
      </button>
    </form>
  );
};

export default ProductForm;
