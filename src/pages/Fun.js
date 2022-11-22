import React from 'react'
import { JustifiedRow } from '../components/JustifiedRow';
import { PageContainer } from '../components/PageContainer';
import { PageTitle } from '../components/PageTitle';
import { Subtitle } from '../components/Subtitle';

export class Fun extends React.Component {
	render() {
		return (
			<PageContainer id="fun-page">
				<PageTitle text="Just For Fun" />
				<Subtitle text="Spotify Playlists" />
				<JustifiedRow>
					<iframe className="hover-card" src="https://open.spotify.com/embed/user/vx9p6hddl4d7ymwuo1u3zvpxm/playlist/5IciM2Bm9sLcoNv3ukH6hQ" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
					<iframe className="hover-card" src="https://open.spotify.com/embed/user/vx9p6hddl4d7ymwuo1u3zvpxm/playlist/77kmkAbUNK4mrdcH6lAeOl" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
					{/* <iframe className="hover-card" src="https://open.spotify.com/embed/user/22urjhamnlwrxklvyyovl2aka/playlist/4sUOszwJ4uJ1Lou38OAIVj" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> */}
				</JustifiedRow>
				{/* <JustifiedRow>
					<iframe className="hover-card" src="https://open.spotify.com/embed/user/22urjhamnlwrxklvyyovl2aka/playlist/0iCAWntuhodpQsjk0DWldi" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
					<iframe className="hover-card" src="https://open.spotify.com/embed/user/22urjhamnlwrxklvyyovl2aka/playlist/5USulCQGVe2khvYRnmlqGf" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
				</JustifiedRow> */}
			</PageContainer>
		);
	}
}