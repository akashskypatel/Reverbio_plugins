const pluginName = () => 'NegativeTestPlugin';
const pluginVersion = () => 'v0';
const validate = () => 
async function asyncTest() {
  try {
    const response = await fetch('https://httpbin.org/get');
    return response.status;
  } catch (e) {
    console.error('Error in asyncTest:', e);
    return {};
  }