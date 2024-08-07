import { useParams } from "react-router-dom";

function ContentItem() {
  const { contentId } = useParams();

  return (
    <div className="">Content ID: {contentId}</div> 
    
  );
}

export default ContentItem;
