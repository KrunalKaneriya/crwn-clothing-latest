//This is the main wrapper component of all the other component and this component can be said as a parent component

import DirectoryItem from "../directory-item/directory-item.component";
import { DirectoryContainer } from "./directory.styles";

const Directory = ({ categories }) => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
