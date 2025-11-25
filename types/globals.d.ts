export {};

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      onboardingComplete?: boolean;
    };
    public_metadata: {
      onboardingComplete?: boolean;
    };
  }
}
