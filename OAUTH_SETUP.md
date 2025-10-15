# OAuth Setup Guide

This guide will help you set up Google and Facebook OAuth authentication for your educational platform.

## 🚀 Quick Start

1. **Update your environment variables** in `.env.local`
2. **Follow the provider setup guides** below
3. **Test the authentication** using the sign-in page

## 📋 Environment Variables

Your `.env.local` file already contains the necessary placeholders. Replace these values:

```env
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000  # Update for production
NEXTAUTH_SECRET=your-nextauth-secret-key-here  # Generate a random secret

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id-here
GOOGLE_CLIENT_SECRET=your-google-client-secret-here

# Facebook OAuth
FACEBOOK_CLIENT_ID=your-facebook-app-id-here
FACEBOOK_CLIENT_SECRET=your-facebook-app-secret-here
```

## 🔧 Provider Setup

### Google OAuth Setup

1. **Go to Google Cloud Console**
   - Visit: https://console.developers.google.com/
   - Select your project or create a new one

2. **Enable Google+ API**
   - Go to "APIs & Services" > "Library"
   - Search for "Google+ API" and enable it

3. **Create OAuth Credentials**
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "OAuth Client ID"
   - Choose "Web application"

4. **Configure OAuth Consent Screen**
   - Add your app name, user support email
   - Add authorized domains (e.g., `localhost:3000`, your domain)

5. **Set Authorized URLs**
   ```
   Authorized JavaScript origins:
   - http://localhost:3000
   - https://yourdomain.com

   Authorized redirect URIs:
   - http://localhost:3000/api/auth/callback/google
   - https://yourdomain.com/api/auth/callback/google
   ```

6. **Copy credentials** to your `.env.local` file

### Facebook OAuth Setup

1. **Go to Meta for Developers**
   - Visit: https://developers.facebook.com/
   - Login with your Facebook account

2. **Create New App**
   - Click "Create App"
   - Choose "Consumer" or "Business" type
   - Add app name and contact email

3. **Add Facebook Login Product**
   - Go to app dashboard
   - Click "Add Product" and select "Facebook Login"

4. **Configure Facebook Login**
   - Go to Facebook Login > Settings
   - Add Valid OAuth Redirect URIs:
   ```
   http://localhost:3000/api/auth/callback/facebook
   https://yourdomain.com/api/auth/callback/facebook
   ```

5. **Get App Credentials**
   - Go to Settings > Basic
   - Copy App ID and App Secret to your `.env.local` file

6. **App Review (for production)**
   - Submit app for review to access public users
   - During development, you can test with developer accounts

## 🔐 Security Notes

1. **NextAuth Secret**: Generate a secure random string:
   ```bash
   openssl rand -base64 32
   ```

2. **Environment Variables**: Never commit `.env.local` to version control

3. **Production URLs**: Update `NEXTAUTH_URL` for production deployment

4. **HTTPS**: Always use HTTPS in production

## 🧪 Testing

1. **Start your development server**:
   ```bash
   npm run dev
   ```

2. **Navigate to sign-in page**:
   - http://localhost:3000/auth/signin

3. **Test each provider**:
   - Click "Continue with Google"
   - Click "Continue with Facebook" 
   - Check for successful authentication

## 🔍 Troubleshooting

### Common Issues:

1. **"Invalid Client" Error**
   - Check that Client ID and Secret are correct
   - Verify redirect URIs are properly configured

2. **"Access Blocked" Error**
   - Ensure OAuth consent screen is properly configured
   - Add test users during development

3. **"Callback URL Mismatch"**
   - Verify redirect URIs in provider settings
   - Check that NEXTAUTH_URL is correct

### Debug Mode:

The NextAuth configuration includes debug mode for development:
- Check browser console for detailed error messages
- Check server console for authentication logs

## 📱 Features Included

✅ Google OAuth integration
✅ Facebook OAuth integration  
✅ GitHub OAuth integration (bonus)
✅ Error handling and user feedback
✅ Responsive sign-in UI
✅ Session management
✅ Secure token handling
✅ Custom callbacks for user data

## 🎨 Customization

The sign-in page is located at:
- `src/app/auth/signin/page.tsx`

You can customize:
- Button styles and layout
- Provider icons
- Error messages
- Redirect behavior

## 📖 Additional Resources

- [NextAuth.js Documentation](https://next-auth.js.org/)
- [Google OAuth Guide](https://developers.google.com/identity/protocols/oauth2)
- [Facebook Login Documentation](https://developers.facebook.com/docs/facebook-login/)

---

🎉 **You're all set!** Follow the setup steps above and your OAuth authentication will be ready to use.