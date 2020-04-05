export class Config {
  public VersionNumber: string = "9.0h";
  private _mode: string = "ca.on";

  private _mobile: string;
  get Mobile(): string {
    switch (this._mode) {
      case "au":
        return "+61 4 49799717";
        break;
      case "ca.on":
        return "+1 647 613 1540";
        break;
      case "ca.bc":
        return "+1 647 613 1540";
        break;
    }
  }

  private _address: string;
  get Address(): string {
    switch (this._mode) {
      case "au":
        return "Sydney Olympic Park, 2127";
        break;
      case "ca.on":
        return "Toronto, ON";
        break;
      case "ca.bc":
        return "Vancouver, BC";
        break;
    }
  }

  private _residencyStatus: string[];
  private _caResidencyStatus = 'Canadian Permanent Resident (Skilled Immigrant Nominated by Ontario)';
  private _ausResidencyStatus = 'Australian Citizen';
  get ResidencyStatuses(): string[] {
    switch (this._mode) {
      case "au":
        return [this._ausResidencyStatus, this._caResidencyStatus];
        break;
      case "ca.on":
        return [this._caResidencyStatus, this._ausResidencyStatus];
        break;
      case "ca.bc":
        return [this._caResidencyStatus, this._ausResidencyStatus];
        break;
    }
  }
}
