import playlistCover from '../../assets/images/cover/playlist.png'

type HeaderProps = {
    title: string;
    subtitle: string;
}


const PlaylistHeader = ( { title, subtitle }: HeaderProps) => {
    return (
        <div className="header-container">
            <div className="header-background"/>
            <div className="header-content">
                <img src={playlistCover} alt="playlist cover" className="header-cover" />

                <div className="info">
                    <h2>{title}</h2>
                    <h5>{subtitle}</h5>
                </div>
            </div>
        </div>
    )   
}

export default PlaylistHeader;