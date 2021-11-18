import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "styled-components";
import { borderRadius } from "../../../globalStyle/_variables";
import { PrimaryButton } from "../../Button/Button";
import Box from "../../layout/Box/Box";
import Stack from "../../layout/Stack/Stack";
import FlexContainer from "../../layout/utilities/Flex/FlexContainer";
import Switcher from "../../layout/utilities/Switcher/Switcher";
import Paragraph from "../../Typography/Paragraph";
import TextBox from "../Input/TextBox";
import Label from "../Label/Label";
import Message from "../../Message/Message";
import axios from "axios";
import { baseUrl } from "../../../api/baseUrl";
import { useAuth } from "../../../context/AuthContext";

const Form = styled.form``;

const DisabledInput = styled.input`
  border: 1px solid var(--cool-gray-2);
  padding: 0.5rem;
  background: white;
  border-radius: ${borderRadius.md};
  :hover {
    cursor: not-allowed;
  }
`;
const PriceInput = styled.input`
  border: 1px solid var(--cool-gray-2);
  padding: 0.5rem;
  background: white;
  border-radius: ${borderRadius.md};
  outline: none;
  &:focus {
    border: 1px solid var(--cool-gray-3);
  }
`;

const Select = styled.select`
  border: 1px solid var(--cool-gray-2);
  padding: 0.5rem;
  background: white;
  border-radius: ${borderRadius.md};
  outline: none;
  &:focus {
    border: 1px solid var(--cool-gray-3);
  }
`;
const Fieldset = styled.fieldset`
  border: none;
  legend {
    font-size: inherit;
    font-weight: 600;
  }
`;
const Checkbox = styled.input`
  padding: 0.5rem;
`;

const schema = yup.object({
  establishmentName: yup
    .string()
    .min(5)
    .required("Please name your establishment"),
  category: yup.string().required("Please choose a category"),
  slug: yup.string(),
  amenitites: yup.object({
    shower: yup.bool(),
    office: yup.bool(),
    gym: yup.bool(),
    cleaning: yup.bool(),
    breakfast: yup.bool(),
  }),
  price: yup
    .number()
    .min(5, "Price has to be higher than 5")
    .required("Please include a price"),
  bedrooms: yup.number().min(1).required("Please include how many bedrooms"),
  distanceToCentre: yup.number().required(),
  establishmentDescription: yup.string().required("An description is required"),
  file: yup.object(),
});

const CreateEstablishmentForm = () => {
  const { auth } = useAuth();
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("");

  const [breakfast, setBreakfast] = useState(false);
  const [office, setOffice] = useState(false);
  const [gym, setGym] = useState(false);
  const [cleaning, setCleaning] = useState(false);
  const [shower, setShower] = useState(false);

  const [files, setFiles] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e, setter) => {
    setter(e.target.value);
  };
  const handleInputChange = (e) => {
    setFiles(e.target.files[0]);
  };
  const handleCheckbox = (state, setState) => {
    setState(!state);
  };

  const handleSelect = (e) => {
    setCategory(e.target.value);
  };
  const categoryId = (category) => {
    if (category === "hotels") {
      return 1;
    }
    if (category === "cabin") {
      return 2;
    }
    if (category === "house") {
      return 3;
    }
  };
  async function createEstablishment(data) {
    const url = `${baseUrl}/establishments`;
    setSuccess(false);
    setError(null);
    const res = await axios({
      method: "POST",
      url: url,
      headers: {
        Authorization: `Bearer ${auth.token} `,
      },
      data: data,
    })
      .then((res) => {
        console.log(res.data);
        const imageUpload = async (res) => {
          const uploadUrl = `${baseUrl}/upload`;
          const formData = new FormData();
          const id = res.data.id;
          formData.append("files", files);
          formData.append("refId", id);
          formData.append("ref", "establishments");
          formData.append("field", "image");

          const imageRes = await axios({
            method: "POST",
            url: uploadUrl,
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
            data: formData,
          });
          setSuccess(true);
        };
        imageUpload(res);
      })
      .catch((err) => {
        setError(err.toString());
      });
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    const formdata = {
      amenities: {
        id: data.id,
        shower: shower,
        cleaning: cleaning,
        office: office,
        gym: gym,
        breakfast: breakfast,
      },
      bedrooms: data.bedrooms,
      category: {
        id: categoryId(category),
        name: category,
      },
      distance_city_centre_km: data.distanceToCentre,
      description: data.establishmentDescription,
      title: data.establishmentName,
      price: data.price,
      slug: data.slug,
      user: {
        id: auth.userinfo.id,
        username: auth.userinfo.username,
        email: auth.userinfo.email,
      },
      short_description: data.establishmentDescription.slice(0, 5),
    };
    createEstablishment(formdata);
  };

  useEffect(() => {
    const createSlug = (name) => {
      if (name.length < 0) {
        return null;
      }
      const newSlug = name.replaceAll(" ", "-").toLowerCase();
      setSlug(newSlug);
    };
    createSlug(name);
  }, [slug, name]);

  return (
    <Box background="white" borderRadius padding="3rem" shadow>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {error && <Message.Error>{error}</Message.Error>}
        {success && <Message.Success> Successfully created! </Message.Success>}
        <Stack>
          <Label htmlFor="establishmentName"> Establishment Name </Label>
          <PriceInput
            value={name}
            type="text"
            name="establishmentName"
            {...register("establishmentName")}
            onChange={(e) => handleChange(e, setName)}
          />
          {errors.establishmentName && (
            <Message.Error>{errors.establishmentName.message}</Message.Error>
          )}
        </Stack>
        <Stack>
          <Label htmlFor="category">Category</Label>
          <Select
            name="category"
            {...register("category")}
            onChange={(e) => handleSelect(e)}
          >
            <option value="">Choose category</option>
            <option value="hotels">Hotel</option>
            <option value="cabin">Cabin</option>
            <option value="house">House</option>
          </Select>
          {errors.category && (
            <Message.Error>{errors.category.message}</Message.Error>
          )}
        </Stack>

        <Stack>
          <Label htmlFor="slug">Slug</Label>
          <DisabledInput
            type="text"
            name="slug"
            readOnly
            {...register("slug")}
            placeholder="your-slug"
            value={slug}
            onChange={(e) => {
              handleChange(e, setSlug);
            }}
          />
        </Stack>
        <Stack>
          <Label htmlFor="price">Price</Label>
          <PriceInput
            name="price"
            placeholder="$0"
            type="number"
            {...register("price")}
          />
          {errors.price && (
            <Message.Error>{errors.price.message}</Message.Error>
          )}
        </Stack>
        <Stack>
          <Fieldset>
            <legend>Amenities</legend>
            <Paragraph>Which amenities do your establishment offer?</Paragraph>
            <Switcher>
              <FlexContainer col alignItems="center">
                <Label htmlFor="shower"> Shower </Label>
                <Checkbox
                  type="checkbox"
                  name="shower"
                  {...register("shower")}
                  value="shower"
                  checked={shower}
                  onChange={(e) => handleCheckbox(shower, setShower)}
                />
              </FlexContainer>
              <FlexContainer col alignItems="center">
                <Label> Cleaning </Label>
                <Checkbox
                  type="checkbox"
                  name="cleaning"
                  {...register("cleaning")}
                  value="cleaning"
                  checked={cleaning}
                  onChange={(e) => handleCheckbox(cleaning, setCleaning)}
                />
              </FlexContainer>
              <FlexContainer col alignItems="center">
                <Label> Office </Label>
                <Checkbox
                  type="checkbox"
                  name="office"
                  {...register("office")}
                  value="office"
                  checked={office}
                  onChange={(e) => handleCheckbox(office, setOffice)}
                />
              </FlexContainer>
              <FlexContainer col alignItems="center">
                <Label> Gym </Label>
                <Checkbox
                  type="checkbox"
                  name="gym"
                  {...register("gym")}
                  value="gym"
                  checked={gym}
                  onChange={(e) => handleCheckbox(gym, setGym)}
                />
              </FlexContainer>
              <FlexContainer col alignItems="center">
                <Label> Breakfast </Label>
                <Checkbox
                  type="checkbox"
                  name="breakfast"
                  {...register("breakfast")}
                  value="breakfast"
                  defaultChecked={breakfast}
                  onChange={(e) => handleCheckbox(breakfast, setBreakfast)}
                />
              </FlexContainer>
            </Switcher>
            {errors.amenities && (
              <Message.Error>{errors.amenities.message}</Message.Error>
            )}
          </Fieldset>
        </Stack>
        <Stack>
          <Label htmlFor="bedrooms">Bedrooms</Label>
          <PriceInput type="number" name="bedrooms" {...register("bedrooms")} />
          {errors.bedrooms && (
            <Message.Error>{errors.bedrooms.message}</Message.Error>
          )}
          <Label htmlFor="distance-to-city-centre">
            Distance to city centre
          </Label>
          <PriceInput
            name="distance-to-city-centre"
            type="number"
            {...register("distanceToCentre")}
          />
          {errors.distanceToCentre && (
            <Message.Error>{errors.distanceToCentre.message}</Message.Error>
          )}
        </Stack>
        <Stack>
          <Label htmlFor="description">Establishment description</Label>
          <TextBox
            name="description"
            {...register("establishmentDescription")}
          />
          {errors.establishmentDescription && (
            <Message.Error>
              {errors.establishmentDescription.message}
            </Message.Error>
          )}
        </Stack>
        <Stack>
          <Label htmlFor="files">Upload Image (Accepts ,jpg files)</Label>
          <input
            type="file"
            name="files"
            accept="image/*"
            onChange={handleInputChange}
          />
          {errors.file && <Message.Error>{errors.file.message}</Message.Error>}
        </Stack>

        <PrimaryButton type="submit" role="submit" full size="md">
          Create Establishment
        </PrimaryButton>
      </Form>
    </Box>
  );
};

export default CreateEstablishmentForm;
