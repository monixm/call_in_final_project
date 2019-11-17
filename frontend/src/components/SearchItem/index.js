import React, {Component} from 'react';
import SearchItemCall from "./searchItemCalls";
import SearchItemEvent from "./searchItemEvents";
import SearchItemOrganisation from "./searchItemOrganisation";
import SearchItemVolunteer from "./searchItemVolunteer";


class SearchItem extends Component {
    render() {
        if (!this.props.result){
            return <div>
                No result found
            </div>
        }
        if (this.props.result.type==='call'){
            return <SearchItemCall result={this.props.result}/>
        }
        if (this.props.result.type==='event'){
            return <SearchItemEvent result={this.props.result} />
        }
        if (this.props.result.type==='organisation'){
            return <SearchItemOrganisation result={this.props.result} interests={this.props.interests}/>
        }
        if (this.props.result.type==='volunteer'){
            return <SearchItemVolunteer result={this.props.result} interests={this.props.interests}/>
        }

    }
}
export default SearchItem;

