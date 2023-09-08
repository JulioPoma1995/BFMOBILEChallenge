
describe('Android Mobile Test', () => {
    it('SingUp y Login - activar Form - Busqueda y desplazamiento', async () => {

        //SingUp y LogIn
       await $('//android.widget.Button[@content-desc="Forms"]/android.widget.TextView[1]').click();
        await $('//android.view.ViewGroup[@content-desc="button-sign-up-container"]/android.view.ViewGroup/android.widget.TextView').click();
        const email = await $('//android.widget.EditText[@content-desc="input-email"]');
        email.addValue('juliopomap.j@gmail.com');
        const password = await $('//android.widget.EditText[@content-desc="input-password"]');
        password.addValue('JulioPoma');
        const password_confirm = await $('//android.widget.EditText[@content-desc="input-repeat-password"]');
        password_confirm.addValue('JulioPoma');
        await $('//android.view.ViewGroup[@content-desc="button-SIGN UP"]/android.view.ViewGroup/android.widget.TextView').click();
        await $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.Button').click();
        await $('//android.view.ViewGroup[@content-desc="button-login-container"]/android.view.ViewGroup/android.widget.TextView').click();
        await $('//android.view.ViewGroup[@content-desc="button-LOGIN"]/android.view.ViewGroup').click();
        await $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.Button').click();
        //Rellenar Form
        await $('//android.widget.Button[@content-desc="Forms"]/android.widget.TextView[1]').click();
        const inputfield = await $('//android.widget.EditText[@content-desc="text-input"]');
        inputfield.addValue('Pruebas');
        await $('//android.widget.Switch[@content-desc="switch"]').click();
        await $('//android.view.ViewGroup[@content-desc="Dropdown"]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView').click();
        await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[3]').click();
        await $('//android.view.ViewGroup[@content-desc="button-Active"]/android.view.ViewGroup').click();
        await $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.Button[3]').click();
        //Búsqueda de palabra
        await $('//android.widget.Button[@content-desc="Webview"]/android.widget.TextView').click();
        await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[2]/android.view.View[2]/android.widget.Button').click();
        const search = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View[2]/android.view.View[1]/android.view.View/android.widget.TextView[1]');
        search.addValue('browser');
        await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View[2]/android.view.View[1]/android.widget.Button').click();
        //Navegar entre los tabs


        })

        it('')

    });