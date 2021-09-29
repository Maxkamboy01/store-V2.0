import React, { useState, useEffect } from "react";
import {
  AddProduct,
  Fixed,
  Form,
  FormParent,
  Tablestyle,
  Togglestate,
} from "./styles";
import axios from "axios";
import { ReactComponent as EditIcon } from "../../assets/icons/edit-icon.svg";
import { ReactComponent as DeleteIcon } from "../../assets/icons/delete-icon.svg";
import { ReactComponent as NumberIcon } from "../../assets/icons/number-icon.svg";
import { ReactComponent as Arrowup } from "../../assets/icons/arrow-up.svg";
import { ReactComponent as Addproduct } from "../../assets/icons/add-product.svg";

function ProductPage() {
  const [product, setproduct] = useState([]);
  const [edit, setedit] = useState({
    edit: false,
    data: {},
  });

  const [formPopUp, setFormPopUp] = useState(false);

  const getProduct = () => {
    axios
      .get("https://ibs-school.herokuapp.com/api/v1/for-developer/product")
      .then((res) => {
        setproduct(res.data);
      })
      .catch();
  };

  useEffect(() => {
    getProduct();
  }, []);

  const submitForm = (e) => {
    e.preventDefault();
    const { name, price, description } = e.target;
    const form = {
      name: name.value,
      price: price.value,
      description: description.value,
    };

    axios
      .post(
        "https://ibs-school.herokuapp.com/api/v1/for-developer/product",
        form
      )
      .then((res) => {
        e.target.reset();
        getProduct();
        // setTimeout(() => {
          // setFormPopUp(false);
        // }, 500);
        console.log("post is working");
      })
      .catch((err) => {
        console.log("error is working");
      });
  };

  const deleteProduct = (id) => {
    axios
      .delete(
        "https://ibs-school.herokuapp.com/api/v1/for-developer/product/" + id
      )
      .finally(() => {
        getProduct();
      });
  };

  const updateForm = (e) => {
    e.preventDefault();
    const { name, price, description } = e.target;

    const form = {
      name: name.value,
      price: price.value,
      description: description.value,
    };

    axios
      .put(
        "https://ibs-school.herokuapp.com/api/v1/for-developer/product/" +
          edit.data.id,
        form
      )
      .then((res) => {
        console.log(res.data);
        getProduct();
        setedit({
          edit: false,
          data: {},
        });

        e.target.reset();
        setTimeout(() => {
          setFormPopUp(false);
        }, 500);
      })

      .catch();
  };

  const [navbar, setNavbar] = useState(false);
  const scrollEvent = () => {
    if (window.pageYOffset > 100) {
      setNavbar(true);
      console.log("it is working scroll event");
    } else {
      setNavbar(false);
    }
  };

  return (
    <div onWheel={scrollEvent} style={{ minHeight: "150vh" }}>
      <FormParent popUpToggle={formPopUp}>
        <div className="bgblur" onClick={() => setFormPopUp(false)} />

        <Form onSubmit={edit.edit ? updateForm : submitForm}>
          <Togglestate onClick={() => setFormPopUp(false)}>
            <DeleteIcon />
          </Togglestate>
          <input
            defaultValue={edit.edit ? edit.data.name : ""}
            type="text"
            name="name"
            placeholder="name"
            required
          />

          <input
            defaultValue={edit.edit ? edit.data.price : ""}
            type="number"
            name="price"
            placeholder="price"
            required
          />

          <textarea
            defaultValue={edit.edit ? edit.data.description : ""}
            required
            rows="5"
            name="description"
            placeholder="information"
          ></textarea>
          <button>{edit.edit ? "update" : "submit"}</button>
        </Form>
      </FormParent>

      <Tablestyle popUpToggle={formPopUp}>
        <tr>
          <th>
            <NumberIcon />
          </th>
          <th>Product name</th>
          <th>Product price</th>
          <th>Product information</th>
          <th>edit/delete</th>
        </tr>
        {product?.map(({ name, price, description, id }, index) => (
          <tr key={id}>
            <td>{index + 1}</td>
            <td>{name}</td>
            <td>
              <span
                style={{
                  color: "#009fe2",
                  marginRight: "4px",
                  fontSize: "18px",
                }}
              >
                $
              </span>
              {price}
            </td>

            <td>{description}</td>
            <td>
              <div className="edit">
                <div
                  className="editbox"
                  onClick={() => {
                    setedit({
                      edit: true,
                      data: { id, name, price, description },
                    });
                    setFormPopUp(true);
                  }}
                >
                  <EditIcon />
                  <span>edit</span>
                </div>

                <div
                  className="editbox"
                  onClick={() => {
                    deleteProduct(id);
                  }}
                >
                  <DeleteIcon />
                  <span>delete</span>
                </div>
              </div>
            </td>
          </tr>
        ))}
      </Tablestyle>
      <Fixed sticked={navbar} href="#">
        <Arrowup />
      </Fixed>
      <AddProduct
        onClick={() => {
          setFormPopUp(true);
          console.log("popup is working");
        }}
        
      >
        <Addproduct />
      </AddProduct>
    </div>
  );
}

export default ProductPage;
