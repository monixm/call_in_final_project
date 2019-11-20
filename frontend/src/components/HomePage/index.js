import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './index.css';
import LogoCallBig from '../../assets/logo-call-big.svg';
import Logo from '../../assets/logo.svg';

class Home extends React.Component {
  state = {
    organisationProfile: false,
    individualProfile: false
  };

  getOrganisationProfile = () => {
    this.setState({
      organisationProfile: true
    });
  };

  getIndividualProfile = () => {
    this.setState({
      individualProfile: true
    });
  };

  getProfile = () => {
    if (this.state.organisationProfile) {
      return <Redirect to='/create-ngo-project-profile' />;
    } else if (this.state.individualProfile) {
      return <Redirect to='/individual' />;
    }
  };

  render() {
    return (
      <div className='home-container'>
        <div className='home-logo'>
          <img className='logo' src={LogoCallBig} alt='profile-icon' />
          <div className='logo-megaphone'>
            <img src={Logo} alt='' />
          </div>
        </div>
        <div className='home-short-info'>
          <p className='start-header'>
            connecting non-profit organisations,
            <br />
            non-governmental organisations, projects <br />
            with locals, and migrants
          </p>
        </div>
        <div className='buttons-start'>
          {this.getProfile()}
          <button
            className='btn-start-organisation'
            onClick={this.getOrganisationProfile}
          >
            an npo, an ngo or a project?
          </button>
          <p className='start-org-desc'>
            Are you an organisation or working on a project?
            <br />
            Do you need volunteers or resources?
          </p>
          <button
            className='btn-start-individual'
            onClick={this.getIndividualProfile}
          >
            an individual?
          </button>
          <p className='start-ind-desc'>
            Are you a local, who wants to contribute?
            <br />
            Did you just migrate in Switzerland?
          </p>
        </div>
        <p className='start-create'>Please choose to create a profile...</p>
        <div className='cont-why-part'>
          <p className='start-why-part'>
            <b>Why should I participate? </b>
            <br />
            1. Be part of the multicultural Call In community of <br />
            non-profit organisations, non-governmental organisations, <br />
            and individuals.
            <br />
            2. Participate in monthly meet ups in different cities <br />
            across Switzerland.
            <br />
            3. Socialise.
            <br />
            4. Get informed of projects happening around you.
            <br />
            5. Participate in talks and presentations by migrants, volunteers,{' '}
            <br />
            and organisations.
          </p>
        </div>
      </div>
    );
  }
}

export default connect()(Home);
