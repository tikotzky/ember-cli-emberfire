# This addon is Deprecated
You can now use emberfire directly with ember cli without the need for this addon.  
See https://github.com/firebase/emberfire#installing-emberfire-with-the-ember-cli

---

## ember-cli-emberfire

This addon that adds [`emberFire`](https://github.com/firebase/emberFire) to the generated Ember CLI output (in `vendor.js`).

### Installation / Usage

1. From within your Ember CLI application (must be > 0.0.34), run the following:

  ```bash
  npm install --save-dev ember-cli-emberfire
  ``` 
1. That's it you should now be able to use `DS.FirebaseAdapter` in your app :)



### References

* [emberFire](https://github.com/firebase/emberFire)

## How this works

1. This repo lists `emberFire` as a bower dependency
1. It runs `bower install` as the `npm postinstall` script
1. it exports a tree containing both the `firebase` and `emberFire` libraries  

### Feedback and PRs welcome!
