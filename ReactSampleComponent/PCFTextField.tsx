import * as React from 'react';
import { TextField } from 'office-ui-fabric-react';

export interface IPCFTextFieldProps {
    PCFDefaultValue: string;
    PCFLabel: string;
    PCFValue: string;
    ComponentTips: string;
    placeholder: string;
    getComponentsData: (param: string) => void;
}

export interface IPCFTextFieldStates {
}

export class PCFTextFieldComponent extends React.Component<IPCFTextFieldProps, IPCFTextFieldStates> {
    constructor(props: IPCFTextFieldProps) {
        super(props);
        this.state = {
        }
    }

    public textChange = (e: any) => {
        this.props.getComponentsData(e.target.value);
    }

    public render(): JSX.Element {
        return (
            <div title={this.props.ComponentTips}>
                <TextField placeholder={this.props.placeholder} onChange={this.textChange.bind(this)} label={this.props.PCFLabel} value={this.props.PCFValue} defaultValue={this.props.PCFDefaultValue} />
            </div>
        );
    }
}