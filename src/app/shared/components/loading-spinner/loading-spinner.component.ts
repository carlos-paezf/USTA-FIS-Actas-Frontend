import { Component } from '@angular/core';
import { LoadingServiceService } from '../../services';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent {

  constructor(private readonly _loadingService: LoadingServiceService) { }

  public isLoading = this._loadingService.isLoading

}
