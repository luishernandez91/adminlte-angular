import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  /**
   * Form controls container
   */
  form: FormGroup;
  /**
   * Flag to show/hide loader on login event
   */
  loading: boolean;

  /**
   * Component constructor
   * @param router Router module injection
   */
  constructor(private readonly router: Router) {
    this.form = new FormGroup({
      key: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  }

  /**
   * Initial life hook component
   */
  ngOnInit(): void {
  }

  /**
   * Handle login event
   */
  login() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['/']);
    }, 2000)
  }
}
