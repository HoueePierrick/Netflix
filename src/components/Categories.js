import Json from '../Content/Netflix.json'

const Content = () => {
    return (<main>
        {Json.map((e) => {
            return (<div className="Category">
                <div className="CategoryTitle">{e.category}</div>
                <div className="ImageWall">
                {e.images.map((f) => {
                    return (<img src={f} className="FilmCover"></img>)
                })}
                </div>
            </div>)
        })}
    </main>)
}

export default Content;