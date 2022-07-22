namespace $.$$ {
  export class $pocket_auth extends $.$pocket_auth {
    async login_button() {
      try {
        const response = await fetch("/login", {
          method: 'POST',
          body: JSON.stringify({ username: this.Login_string().value(), password: this.Password_string().value() }),
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        });

        if (response.status === 403) {
          throw new Error(`Wrong username or password`);
        } else if (!response.ok) {
          throw new Error(response.statusText);
        }

        const result = await response.json();
        $mol_state_local.value("accessToken", result.accessToken);

      } catch (error) {
        $mol_state_local.value('token', null);
        alert(error);
      }
    }
  }
}
