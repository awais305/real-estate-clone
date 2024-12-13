import React, { useMemo, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import ButtonComponent from "../../Components/ButtonComponent";
import CheckboxComponent from "../../Components/CheckboxComponent/CheckboxComponent";
import ContactComponent from "../../Components/ContactComponent/ContactComponent";
import DropdownComponent from "../../Components/DropdownComponent/DropdownComponent";
import PathOnPageComponent from "../../Components/PathOnPageComponent/PathOnPageComponent";
import RadioButtonComponent from "../../Components/RadioButtonComponent";
import TextFieldComponent from "../../Components/TextFieldComponent";
import { AssetPath } from "../../Utils/Constants";
import "./AddPropertyPage.scss";

const AddPropertyPage = () => {
  const [file, setFile] = useState(null);
  const dropdownList = ["Home", "Hotel", "Commercial", "Land"];
  const typeList = ["Single Family", "Appartment", "Condo/Groped", "Room"];
  const propertyTypes = ["For Rent", "For Buy"];
  const areaUnits = ["SQ FT"];
  const durations = ["Month", "Year"];
  const usersSelectedAmenities = [1, 5];
  const amenitiesList = [
    {
      id: 1,
      name: "Swimming Pool",
    },
    {
      id: 2,
      name: "Balcony",
    },
    {
      id: 3,
      name: "Ensuite",
    },
    {
      id: 4,
      name: "Tennis Court",
    },
    {
      id: 5,
      name: "Garage",
    },
    {
      id: 6,
      name: "Outdoor Area",
    },
    {
      id: 7,
      name: "Built In Robes",
    },
    {
      id: 8,
      name: "Study",
    },
    {
      id: 9,
      name: "Alarm System",
    },
    {
      id: 10,
      name: "Board",
    },
    {
      id: 11,
      name: "Gym",
    },
    {
      id: 12,
      name: "Outdoor Spa",
    },
  ];

  const [selectedPropertyType, setSelectedPropertyType] = useState(
    propertyTypes[0]
  );

  const [selectedAmenities, setSelectedAmenities] = useState(
    useMemo(() => {
      const filteredAmenities = amenitiesList.filter((amenity) =>
        usersSelectedAmenities.includes(amenity.id)
      );

      return filteredAmenities;
    }, [usersSelectedAmenities, amenitiesList])
  );

  return (
    <>
      <div className="add_property_page">
        <div className="width_wrapper">
          <PathOnPageComponent
            parentPage={"Home"}
            childPage={"Add Property "}
          />
          <span className="page_title">Add Property</span>
          <div className="container">
            <div className="row">
              <TextFieldComponent
                className={"text_field"}
                marginTop={"0px"}
                marginBottom={"0px"}
                placeholder={"Woodland Appartments"}
                prefixIconPath={AssetPath.homeIcon}
              />
              <TextFieldComponent
                className={"text_field"}
                marginTop={"0px"}
                marginBottom={"0px"}
                placeholder={"Location"}
                prefixIconPath={AssetPath.locationPinIcon}
              />
            </div>
            <div className="row">
              <div className="dropdown_fields">
                <DropdownComponent
                  width={"calc(55% - 20px)"}
                  list={dropdownList}
                  onChanged={(selectedValue) => {}}
                  marginTop={"0"}
                  marginBottom={"0"}
                  isWhiteBackground
                />
                <DropdownComponent
                  width={"calc(55% - 20px)"}
                  list={typeList}
                  onChanged={(selectedValue) => {}}
                  marginTop={"0"}
                  marginBottom={"0"}
                  isWhiteBackground
                />
              </div>
              <div className="property_type">
                {propertyTypes.map((propertyType) => {
                  return (
                    <RadioButtonComponent
                      key={propertyType}
                      title={propertyType}
                      isSelected={selectedPropertyType === propertyType}
                      onClick={() => {
                        setSelectedPropertyType(propertyType);
                      }}
                    />
                  );
                })}
              </div>
            </div>
            <TextFieldComponent
              className={"multiline_field"}
              marginTop={"0px"}
              marginBottom={"0px"}
              height={"150px"}
              prefixIconPath={AssetPath.aboutPropertyIcon}
              placeholder={"Enjoy a vibrant lifestyle in a peaceful setting"}
              maxRows={"5"}
              isMultiline
            />
            <span className="section_heading">Details</span>
            <div className="details">
              <TextFieldComponent
                className={"text_field"}
                marginTop={"0px"}
                marginBottom={"0px"}
                type={"number"}
                maxLength={"2"}
                prefixIconPath={AssetPath.roomIcon}
                placeholder={"Rooms"}
              />
              <TextFieldComponent
                className={"text_field"}
                marginTop={"0px"}
                marginBottom={"0px"}
                type={"number"}
                maxLength={"2"}
                placeholder={"Bathroom"}
                prefixIconPath={AssetPath.bathroomIcon}
              />
              <TextFieldComponent
                className={"text_field"}
                marginTop={"0px"}
                marginBottom={"0px"}
                placeholder={"Area"}
                type={"number"}
                prefixIconPath={AssetPath.areaIcon}
              />
              <DropdownComponent
                width={"calc(50% - 10px)"}
                list={areaUnits}
                onChanged={(selectedValue) => {}}
                marginTop={"0"}
                marginBottom={"0"}
              />
              <TextFieldComponent
                className={"text_field"}
                marginTop={"0px"}
                marginBottom={"0px"}
                placeholder={"Amount"}
                type={"number"}
                prefixIconPath={AssetPath.amountIcon}
              />
              <DropdownComponent
                width={"calc(50% - 10px)"}
                list={durations}
                onChanged={(selectedValue) => {}}
                marginTop={"0"}
                marginBottom={"0"}
              />
            </div>
            <span className="section_heading">Amenities</span>
            <div className="amenities">
              {amenitiesList.map((amenity) => (
                <CheckboxComponent
                  key={amenity?.id}
                  id={amenity?.id}
                  text={amenity?.name}
                  item={amenity}
                  selectedItemsId={selectedAmenities.map((item) => item.id)}
                  onChanged={(checked, checkedAmenity) => {
                    if (checked) {
                      console.log("added: ", checkedAmenity);
                      setSelectedAmenities((prevSelectedItems) => [
                        ...prevSelectedItems,
                        checkedAmenity,
                      ]);
                    } else {
                      console.log("removed: ", checkedAmenity);
                      setSelectedAmenities((prevSelectedItems) =>
                        prevSelectedItems.filter(
                          (item) => item?.id !== checkedAmenity?.id
                        )
                      );
                    }
                  }}
                />
              ))}
            </div>
            <span className="section_heading">Upload A Photo</span>
            <div className="file_upload_wrapper">
              <FileUploader
                multiple={false}
                name={file ? file?.name : ""}
                types={["JPG", "JPEG", "PNG"]}
                children={
                  <div className="file_upload_container">
                    <span className="upload_text">
                      Drop File Here To Upload
                    </span>
                    <img width={"40px"} src={AssetPath.uploadIcon} alt="" />
                    {file && (
                      <span className="upload_text uploaded">{file.name}</span>
                    )}
                  </div>
                }
                handleChange={(file) => {
                  setFile(file);
                  console.log(file.name);
                }}
              />
            </div>{" "}
            <TextFieldComponent
              className={"text_field"}
              marginTop={"0px"}
              marginBottom={"0px"}
              prefixIconPath={AssetPath.idCardIcon}
              disabled
            />
            <span className="id_text">ID is generated upon submission</span>
            <div className="save_buttons">
              <ButtonComponent
                height={"52px"}
                text={"Save As Draft"}
                backgroundColor={"#E1E7F0"}
                // fontWeight={"400"}
                fontSize={"17px"}
                textColor={"var(--black)"}
              />
              <ButtonComponent
                height={"52px"}
                text={"Submit Post"}
                // fontWeight={"400"}
                fontSize={"17px"}
                onClick={() => {
                  console.log(selectedAmenities);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <ContactComponent />
    </>
  );
};

export default AddPropertyPage;
