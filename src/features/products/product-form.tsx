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
    } else if (formData.description.length < 2) {
      newError.name = "توضیحات باید حداقل 10 تا کارکتر باشد";
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
    console.log("سلامسسسسسسس");
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
        <label>نام محصول:</label>
        <input
          className="input"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {error.name && <p className="message-error">{error.name}</p>}
      </div>

      <div className="container-input">
        <label>قیمت محصول :</label>
        <input
          className="input"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
        {error.price && <p className="message-error">{error.price}</p>}
      </div>

      <div className="container-input">
        <label>عکس محصول :</label>
        <input
          name="imag"
          className="input"
          value={formData.imag}
          onChange={(e) => handleChange(e)}
        />
        {error.imag && <p className="message-error">{error.imag}</p>}
      </div>

      <div className="container-input">
        <label>توضیحات محصول:</label>
        <textarea
          name="description"
          className="input"
          value={formData.description}
          onChange={handleChange}
        />
        {error.description && (
          <p className="message-error">{error.description}</p>
        )}
      </div>

      <button className="btn-submit" type="submit">
        اضافه کردن محصول
      </button>
    </form>
  );
};

export default ProductForm;
