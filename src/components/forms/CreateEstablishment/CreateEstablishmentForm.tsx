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
const FileInput = styled.input`
  &::file-selector-button {
    color: var(--cool-gray-9);
    padding: 0.5rem 1rem;
    border: 1px solid var(--blue-6);
    border-radius: ${borderRadius.md};
    &:hover {
      cursor: pointer;
    }
  }
`;

const schema = yup.object({
  establishmentName: yup
    .string()
    .min(5)
    .required("Please name your establishment"),
  category: yup.string().required("Please choose a category"),
  slug: yup.string(),
  price: yup
    .number()
    .min(5, "Price has to be higher than 5")
    .required("Please include a price"),
  amenitites: yup.object(),
  bedrooms: yup.number().min(1).required("Please include how many bedrooms"),
  distanceToCentre: yup.number().required(),
  establishmentDescription: yup.string().required("An description is required"),
  establishmentImage: yup
    .mixed()
    .required("Please include an image for your establishment"),
});

const CreateEstablishmentForm = () => {
  const { auth } = useAuth();
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");

  async function createEstablishment(file, data) {
    const url = `${baseUrl}/establishments`;
    let formData = new FormData();
    formData.append("files.establishmentImg", file);
    formData.append("data", JSON.stringify(data));
    try {
      const res = await axios({
        method: "POST",
        url: url,
        headers: {
          Authorization: `Bearer ${auth.token} `,
        },
        data: formData,
      });
      const { data } = res;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data.establishmentImage[0]);
    const formdata = {
      amenities: data.amenities,
      bedrooms: data.bedrooms,
      category: data.category,
      distanceToCentre: data.distanceToCentre,
      establishmentDescription: data.establishmentDescription,
      establishmentName: data.establishmentName,
      price: data.price,
      slug: data.slug,
    };
    const file = data.establishmentImage[0];
    createEstablishment(file, formdata);
  };

  const handleChange = (e, setter) => {
    setter(e.target.value);
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
          <Select name="category" {...register("category")}>
            <option value="">Choose category</option>
            <option value="hotel">Hotel</option>
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
                  value="shower"
                  {...register("amenities")}
                />
              </FlexContainer>
              <FlexContainer col alignItems="center">
                <Label> Cleaning </Label>
                <Checkbox
                  type="checkbox"
                  name="cleaning"
                  value="coding"
                  {...register("amenities")}
                />
              </FlexContainer>
              <FlexContainer col alignItems="center">
                <Label> Office </Label>
                <Checkbox
                  type="checkbox"
                  name="office"
                  value="office"
                  {...register("amenities")}
                />
              </FlexContainer>
              <FlexContainer col alignItems="center">
                <Label> Gym </Label>
                <Checkbox
                  type="checkbox"
                  name="gym"
                  value="gym"
                  {...register("amenities")}
                />
              </FlexContainer>
              <FlexContainer col alignItems="center">
                <Label> Breakfast </Label>
                <Checkbox
                  type="checkbox"
                  name="breakfast"
                  value="breakfast"
                  {...register("amenities")}
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
          <Label htmlFor="establishmentImage">
            Upload Image (Accepts ,jpg files)
          </Label>
          <FileInput
            name="establishmentImage"
            accept="image/jpg"
            type="file"
            {...register("establishmentImage")}
          />
          {errors.establishmentImage && (
            <Message.Error>{errors.establishmentImage.message}</Message.Error>
          )}
        </Stack>

        <PrimaryButton type="submit" role="submit" full size="md">
          Create Establishment
        </PrimaryButton>
      </Form>
    </Box>
  );
};

export default CreateEstablishmentForm;
