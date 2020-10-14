import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FuseConfigService } from "@fuse/services/config.service";
import { UserService } from "app/shared/services/user.service";

@Component({
    selector: "app-features",
    templateUrl: "./features.component.html",
    styleUrls: ["./features.component.scss"],
    encapsulation: ViewEncapsulation.None,
})
export class FeaturesComponent implements OnInit {
    fuseConfig: any;
    connetedUser: any;

    constructor(
        private _fuseConfigService: FuseConfigService,
        private userService: UserService
    ) {}

    ngOnInit(): void {
        this._fuseConfigService.config.subscribe((config) => {
            this.fuseConfig = config;
        });
        this.connetedUser = this.userService.getConnectedUser();
    }
}
