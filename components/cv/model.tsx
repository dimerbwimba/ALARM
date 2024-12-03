import DrcFlagBorder from "@/components/design-utils/drc-flag-border";
import Image from "next/image";

const CVModel = ({
  data,
  title,
  image = "",
}: {
  data: any;
  title: string;
  image: string;
}) => {
  return (
    <>
      <div className="volunteer-style-one pb-90 rel z-1">
        <div className="container">
          <div className="justify-content-center">
            <div className="blog-details-area">
              <div className="container col-lg-8">
                <div className="row gap-60">
                  <div className="">
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CVModel;
