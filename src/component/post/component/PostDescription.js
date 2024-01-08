export const PostDescription = ({ data }) => {
  return (
    <>
      {/* <div className="general-information">
        <div className="box-title">
          <h2 className="title">Thông tin chi tiết</h2>
        </div>
        <div className="box-information">
          <ul className="list-attributes">
            {a.map((val, i) => (
              <li key={i} className="item-attribute">
                <div style={{ color: "black" }}>
                  <span className="item-attribute-label">Bảo hành:</span>
                  <span> 12 tháng </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div> */}
      <div className="line-break"></div>
      <div className="description">
        <div className="box-title">
          <h2 className="title">Mô tả chi tiết</h2>
        </div>
        <div className="content-product">
          <div className="information">
            <div className="content-detail">
              <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
