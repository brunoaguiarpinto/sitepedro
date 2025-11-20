<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1DyzqoDw5IxszZwXkJOrGrn5Tu5sR6gQA

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Copie `env.example` para `.env.local` e preencha com as credenciais do Supabase:
   ```
   cp env.example .env.local
   # edite o arquivo e informe os valores reais
   ```
3. Run the app:
   `npm run dev`

> **Deploy (Vercel)**  
> - No painel da Vercel, crie as variáveis `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY` antes do build.  
> - Caso estejam ausentes, o site permanece no ar, porém o inventário exibirá apenas o estado de carregamento e um aviso aparecerá no console.
